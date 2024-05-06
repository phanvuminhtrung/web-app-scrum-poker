import React from 'react';
import { Typography, Box, Divider } from '@material-ui/core';
import './Footer.css';  // Ensure your CSS is correctly linked

export const Footer = () => {
  return (
    <footer className="footer">
      <Box display="flex" justifyContent="center" alignItems="center" p={1}>
        <Typography variant="body2" align="center">
          COPYWRITE © 2024 TROY PHAN 
        </Typography>
        <Divider className="divider" orientation='vertical' flexItem />
        <Typography variant='body2'>
          <a href='https://buymeacoffee.com/thisistroyza' target='_blank' rel='noreferrer'>
            <img
              src='https://cdn.buymeacoffee.com/buttons/v2/default-blue.png'
              alt='Buy Me A Coffee'
              style={{ height: '40px', width: '150px' }}
            />
          </a>
        </Typography>
      </Box>
    </footer>
  );
};
