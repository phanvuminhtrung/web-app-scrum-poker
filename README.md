
<h1 align="center">Point Poker Tool | Troy Phan</h1>

- Open source Scrum/Agile Planning Poker Web App to estimate user stories for the Agile/Scrum teams. 
- Create session and invite team members to estimate user stories efficiently. 
- Intuitive UI/UX for voting the story points, showing team members voting status with emojis(👍 - Voting Done, 🤔 - Yet to Vote).
- Session Moderator has full control on revealing story points and restarting the session.

## Live Site

<https://pointpokertroyphan.netlify.app/>

## Features

1. Create new Session
2. Join Session
3. Invite Link
4. Session controller - Moderator can Reveal and Restart the session anytime.
5. Reveal - Reveal the cards for all users
6. Voting status - Users Cards show voting status using emojis - 👍 - Voting Done, 🤔 - Yet to Vote
7. Remove user from session
8. Delete Session - Moderator can delete the session completely.

## Tech Stack

1. React - Frontend
2. Material-ui - UI Components
3. Firestore NoSql- Database
4. Netlify - Hosting

## How to run the app locally for development

1. Clone the repo

    ```bash
    git clone https://github.com/phanvuminhtrung/web-app-scrum-poker.git
    ```

2. Run `yarn` command to install the required npm package.
3. Run `yarn start` to start the app.
4. Access the app at `http://localhost:3000`.

## Development Guidelines

1. Keep it simple as much as possible
2. Add required unit tests
3. Use strong type always
4. Use functional and hooks based approach for components
5. Keep css simple and easy to maintain
6. Don't duplicate code and use service folder to keep non-component/shared codes

## Pending features open to development

1. Dark/Light mode
2. Add timer voting per session/game
3. Preserve history of voting and show it in session
4. Provide option to enter user story name (LRDZ-123)
5. Integration with Jira

## To-do-list

1. Setup firestore authentication and config on netlify
2. Change theme color to become grey, black, yellow
3. Outline the card and voting session to make it display as grid
4. Adding observation mode
5. Remove redundant icon or question mark voting
6. Fix bug of invite link

