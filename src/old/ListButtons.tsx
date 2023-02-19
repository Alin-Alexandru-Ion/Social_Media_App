import React from 'react'

import './ListButtons.css'

import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

// Material UI List with ListItems as ListButtons
function TechStack() {
    return (
      <div className='tech'>
        <h2>Techstack:</h2>
        <nav aria-label="tech-stack">
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

  function ListButtons() {
    return (
      <div>
        <TechStack />
      </div>
    );
  }

  export default ListButtons;