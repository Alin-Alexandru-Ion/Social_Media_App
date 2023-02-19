import React from 'react'

import './LogIn.css'

import { Button, Link, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

// Import CustomTheme from Themes subfolder
import BlueTheme from '../themes/Theme';


// Element UI TextFields, Buttons and Links
function LogIn() {
  return (
    <ThemeProvider theme={BlueTheme}>
      <div className='text-fields'>
        <TextField className='user' color='secondary' label="Username" variant="outlined" />
        <TextField className='pass' color='secondary' label="Password" variant="outlined" type='password' />
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
            {"Don't have an account? Sign Up"}
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default LogIn;