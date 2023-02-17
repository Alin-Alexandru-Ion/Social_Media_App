import React from 'react'

import './MainContent.css'

import { List, ListItem, ListItemButton, ListItemText, Button, Grid, Link, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

// Imported CustomTheme from Themes subfolder
import BlueTheme from './Themes/Theme';

// Element UI List with ListButtons
function TechStack() {
    return (
      <div className='main-content'>
        <h2>Techstack:</h2>
        <nav aria-label="tech stack">
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Node.js" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="React" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Typescript" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Material UI" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="PostgreSQL (Not yet)" />
            </ListItemButton>
          </ListItem>
        </List>
        </nav>
      </div>
    );
  }

// Element UI TextFields, Buttons and Links
function AccountData() {
  return (
    <ThemeProvider theme={BlueTheme}>
    <div className='text-fields'>
      <TextField id="outlined-basic" color='secondary' label="Username" variant="outlined" />
      <TextField id="outlined-basic" color='secondary' label="Password" variant="outlined" type='password' />
    </div>
    <div className='button-group'>
      <Grid container>
          <Button color='primary' variant='contained'>Log In</Button>
      </Grid>
    </div>
    <div>
      <Grid container>
        <Grid item xs>
          <Link href="#" color='primary' variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" color='primary' variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </div>
  </ThemeProvider>
  );
}

// One function to mesh the others for one export only
function MainContent() {
  return (
    <div>
      <TechStack />
      <AccountData />
    </div>
  );
}

export default MainContent;