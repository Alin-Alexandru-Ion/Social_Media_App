import React from 'react'

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
        <AppBar sx={{ borderRadius: '10px' }} position="sticky" >
          <Toolbar  >
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} >
              <MenuIcon />
            </IconButton >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Social Media App
            </Typography >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="40" alt="React logo" />
          </Toolbar >
        </AppBar >
    );
  }

  export default Header