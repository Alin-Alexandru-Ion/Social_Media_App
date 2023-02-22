import React from 'react'

import './LogIn.css'

import { Button, Container, Link, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'
import { ThemeProvider } from '@mui/material/styles';

// Import CustomTheme from Themes subfolder
import BlueTheme from '../themes/Theme';


// Element UI TextFields, Buttons and Links
function LogIn() {
  return (
    <ThemeProvider theme={BlueTheme} >
    
      <Container >
      
        <Grid container spacing={2} alignItems="center" direction="column"
        >
        
          <Grid xs="auto" >
            <TextField className='user' color='primary' label="Username" variant="outlined" 
            />
          </Grid >
          
          <Grid xs="auto" >  
            <TextField className='pass' color='primary' label="Password" variant="outlined" type='password' />
          </Grid >
          
          <Grid xs="auto" >
            <Button color='primary' variant='contained' size="large" 
            >Log In
            </Button >
            
          </Grid >
          
        </Grid>
        
        <Grid container spacing={2} justify-content="center" alignItems="center"
        >
        
          <Grid spacing={2} >
          
            <Link className='forgot' href="forgot" color='primary' variant="body1"
            >
              Forgot password?
            </Link >
            
          </Grid >
          
          <Grid spacing={2} >
          
            <Link className='sign-up' href="sign-up" color='primary' variant="body1"
            >
              {"No account? Sign Up"}
            </Link >
            
          </Grid >
          
        </Grid >
        
      </Container >
      
    </ThemeProvider >
  );
}

export default LogIn;