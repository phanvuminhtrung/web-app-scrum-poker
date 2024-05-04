import React from 'react';
import { Typography, Link, Box } from '@material-ui/core';
import './Footer.css';  // Ensure your CSS is correctly linked

export const Footer = () => {
  return (
    <footer className="footer">
      <Box display="flex" justifyContent="center" alignItems="center" p={1}>
        <Typography variant="body2" align="center">
          COPYWRITE © 2024 TROY PHAN.
        </Typography>
      </Box>
    </footer>
  );
};
