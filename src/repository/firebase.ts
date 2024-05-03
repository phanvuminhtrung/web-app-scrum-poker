import 'firebase/analytics';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Game } from '../types/game';
import { Player } from '../types/player';

// Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyBqM9p8t9mZvTzs3pN05pxH-06OKyGwvfM',
  authDomain: 'pointpokerwebapp.firebaseapp.com',
  projectId: 'pointpokerwebapp',
  storageBucket: 'pointpokerwebapp.appspot.com',
  messagingSenderId: 422748378964,
  appId: '1:422748378964:web:143b0c4f308fb6dc005ac1',
  measurementId: 'G-4ZQZQZQZQZ',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const gamesCollectionName = 'games';
const playersCollectionName = 'players';
const db = firebase.firestore();

// Function to add a game to Firestore
export const addGameToStore = async (gameId: string, data: any) => {
  await db.collection(gamesCollectionName).doc(gameId).set(data);
  return true;
};

// Function to get a game from Firestore
export const getGameFromStore = async (id: string): Promise<Game | undefined> => {
  const response = db.collection(gamesCollectionName).doc(id);
  const result = await response.get();
  let game = undefined;
  if (result.exists) {
    game = result.data();
  }
  return game as Game;
};

// Function to get all players from a specific game
export const getPlayersFromStore = async (gameId: string): Promise<Player[]> => {
  const db = firebase.firestore();
  const response = db.collection(gamesCollectionName).doc(gameId).collection(playersCollectionName);
  const results = await response.get();
  let players: Player[] = [];
  results.forEach((result) => players.push(result.data() as Player));
  return players;
};

// Function to get a specific player from a specific game
export const getPlayerFromStore = async (gameId: string, playerId: string): Promise<Player | undefined> => {
  const db = firebase.firestore();
  const response = db.collection(gamesCollectionName).doc(gameId).collection(playersCollectionName).doc(playerId);
  const result = await response.get();
  let player = undefined;
  if (result.exists) {
    player = result.data();
  }
  return player as Player;
};

// Function to get a real-time stream of a game's data
export const streamData = (id: string) => {
  return db.collection(gamesCollectionName).doc(id);
};

// Function to get a real-time stream of a game's players
export const streamPlayersFromStore = (id: string) => {
  return db.collection(gamesCollectionName).doc(id).collection(playersCollectionName);
};

// Function to update a game's data in Firestore
export const updateGameDataInStore = async (gameId: string, data: any): Promise<boolean> => {
  const db = firebase.firestore();
  await db.collection(gamesCollectionName).doc(gameId).update(data);
  return true;
};

// Function to add a player to a game in Firestore
export const addPlayerToGameInStore = async (gameId: string, player: Player) => {
  await db.collection(gamesCollectionName).doc(gameId).collection(playersCollectionName).doc(player.id).set(player);
  return true;
};

// Function to remove a player from a game in Firestore
export const removePlayerFromGameInStore = async (gameId: string, playerId: string) => {
  await db.collection(gamesCollectionName).doc(gameId).collection(playersCollectionName).doc(playerId).delete();
  return true;
};

// Function to update a player's data in Firestore
export const updatePlayerInStore = async (gameId: string, player: Player) => {
  await db.collection(gamesCollectionName).doc(gameId).collection(playersCollectionName).doc(player.id).update(player);

  return true;
};

// Function to remove a game from Firestore
export const removeGameFromStore = async (gameId: string) => {
  await db.collection(gamesCollectionName).doc(gameId).delete();
  await db
    .collection(gamesCollectionName)
    .doc(gameId)
    .collection(playersCollectionName)
    .get()
    .then((res) => {
      res.forEach((element) => {
        element.ref.delete();
      });
    });
  return true;
};

// Function to remove games older than 6 months from Firestore
export const removeOldGameFromStore = async () => {
  const monthsToDelete = 6;
  const dateObj = new Date();
  const requiredDate = new Date(dateObj.setMonth(dateObj.getMonth() - monthsToDelete));
  const games = await db.collection(gamesCollectionName).where('createdAt', '<', requiredDate).get();

  console.log('Games length', games.docs.length);
  if (games.docs.length > 0) {
    const data = games.docs[0].data();
    console.log(data);
    console.log(games.docs[games.docs.length - 1].data());
    console.log(data.createdAt.toDate().toString());
    console.log(games.docs[games.docs.length - 1].data().createdAt.toDate().toString());
    const gamesCollection: any = [];

    games.forEach((game) => {
      gamesCollection.push(game);
    });
    for (let game of gamesCollection) {
      console.log('Deleting:', game.data().name);
      const players = await game.ref.collection(playersCollectionName).get();
      const playersCollection: any = [];
      players.forEach((player: Player) => {
        playersCollection.push(player);
      });
      for (let player of playersCollection) {
        await player.ref.delete();
      }
      await game.ref.delete();
      console.log('deleted');
    }
  }

  return true;
};
