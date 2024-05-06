import { Divider, Grid, Slide, Typography, Box } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CreateGame } from '../../components/Poker/CreateGame/CreateGame';
import { JoinGame } from '../../components/Poker/JoinGame/JoinGame';
import { RecentGames } from '../../components/Poker/RecentGames/RecentGames';
import LandingImage from './../../images/background.jpg';
import './HomePage.css';
import { Footer } from '../../components/Footer/Footer';

export const HomePage = () => {
  const isJoin = useRouteMatch('/join');
  const { t } = useTranslation();

  return (
    <>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid container item sm={12} lg={11} justify='center' alignItems='center'>
          <Grid item sm={12} lg={6}>
            <Slide direction='down' in={true} timeout={1000}>
              <div className='HomePageContainer'>
                <Typography variant='h5'>{t('HomePage.heroSection.title')}</Typography>
                <Box padding={2}>
                  <img
                    alt={t('HomePage.heroSection.title')}
                    className='HomePageImage'
                    src={LandingImage}
                  ></img>
                </Box>
                <Typography variant='subtitle1'>{t('HomePage.heroSection.description')}</Typography>
              </div>
            </Slide>
          </Grid>
          <Grid item sm={12} lg={6}>
            <div className='HomePageContainer'>{isJoin ? <JoinGame /> : <CreateGame />}</div>
          </Grid>
        </Grid>
        <Grid container item sm={12} lg={9} justify='center' alignItems='center'>
          <Grid item sm={12} lg={6}>
            <Slide in={true} direction='up' timeout={1000}>
              <Divider variant='middle'></Divider>
            </Slide>
          </Grid>
        </Grid>
        
        {/* Recent games session */}
        <Grid container item sm={12} lg={9} justify='center' alignItems='center'>
          <Grid item sm={12} lg={6}>
            <Slide in={true} direction='up' timeout={1500}>
              <div className='HomePageContainer'>
                <RecentGames />
              </div>
            </Slide>
          </Grid>
          <Grid item sm={12} lg={6}>
            <Slide in={true} direction='up' timeout={1500}>
              <div className='HomePageContainer'>
                <Typography variant='subtitle1'>
                  Here is your recent Planning/Refinement sessions, click on the session name to
                  join the session again.
                </Typography>
              </div>
            </Slide>
          </Grid>
        </Grid>
        <Grid container item sm={12} lg={9} justify='center' alignItems='center'>
          <Grid item sm={12} lg={6}>
            <Slide in={true} direction='up' timeout={2000}>
              <Divider variant='middle'></Divider>
            </Slide>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
};

export default HomePage;
