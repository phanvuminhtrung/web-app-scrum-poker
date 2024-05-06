import { Button, Slide, useMediaQuery } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import AppToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GamesIcon from '@material-ui/icons/Games';
import GithubIcon from '@material-ui/icons/GitHub';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MergeTypeOutlinedIcon from '@material-ui/icons/MergeTypeOutlined';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Toolbar.css';
import { useTranslation } from 'react-i18next';
import { LanguageControl } from '../LanguageControl/LanguageControl';
export const title = 'Point Poker Tool | Troy Phan';

export const Toolbar = () => {
  const history = useHistory();
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('xs'));
  const { t } = useTranslation();

  return (
    <Slide direction='down' in={true} timeout={800}>
      <AppBar position='sticky' className='AppBar'>
        <AppToolbar>
          <div className='HeaderContainer'>
            <div className='HeaderLeftContainer' onClick={() => window.open('https://troyphan.com/', '_blank')}>
              <Typography variant={isSmallScreen ? 'subtitle1' : 'h5'} color='inherit' className="toolbar-button" noWrap>
                {title}
              </Typography>
            </div>
            <div>
              <Button
                title={t('toolbar.menu.home')}
                startIcon={<HomeIcon />}
                color='inherit'
                onClick={() => history.push('/')} 
                data-testid='toolbar.menu.home'
                className="toolbar-button"
              >
                {!isSmallScreen ? t('toolbar.menu.home') : null}
              </Button>
              <Button
                title={t('toolbar.menu.newSession')}
                startIcon={<AddCircleOutlineIcon />}
                color='inherit'
                onClick={() => history.push('/')}
                data-testid='toolbar.menu.newSession'
                className="toolbar-button"
              >
                {!isSmallScreen ? t('toolbar.menu.newSession') : null}
              </Button>
              <Button
                title={t('toolbar.menu.joinSession')}
                startIcon={<MergeTypeOutlinedIcon />}
                size={isSmallScreen ? 'small' : 'large'}
                color='inherit'
                onClick={() => history.push('/join')}
                data-testid='toolbar.menu.joinSession'
                className="toolbar-button"
              >
                {!isSmallScreen ? t('toolbar.menu.joinSession') : null}
              </Button>
              <Button
                id='github-button'
                color='inherit'
                className="toolbar-button"
                onClick={() =>
                  (window.location.href = 'https://github.com/phanvuminhtrung/web-app-scrum-poker')
                }
              >
                <GithubIcon></GithubIcon>
              </Button>
              {!isSmallScreen && <LanguageControl />}
            </div>
          </div>
        </AppToolbar>
      </AppBar>
    </Slide>
  );
};
