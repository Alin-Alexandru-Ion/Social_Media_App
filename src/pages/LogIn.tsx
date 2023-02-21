import React from 'react'

import './LogIn.css'

import { Button, Grid, Link, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

// Import CustomTheme from Themes subfolder
import BlueTheme from '../themes/Theme';


// Element UI TextFields, Buttons and Links
function LogIn() {
  return (
    <ThemeProvider theme={BlueTheme}>
      <div className='text-fields'>
        <Grid>
          <TextField className='user' color='primary' label="Username" variant="outlined" 
          />
        </Grid>
        <TextField className='pass' color='primary' label="Password" variant="outlined" type='password' />
      </div>
      <div className='login-button'>
        <Button color='primary' variant='contained'>Log In</Button>
      </div>
      <div className='links'>
        <div>
          <Link className='forgot' href="forgot" color='primary' variant="body1">
            Forgot password?
          </Link>
          <Link className='sign-up' href="sign-up" color='primary' variant="body1">
            {"No account? Sign Up"}
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default LogIn;