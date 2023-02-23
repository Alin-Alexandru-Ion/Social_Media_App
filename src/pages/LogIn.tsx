import React from 'react'

import { Button, Container, Link, Stack, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

// Import CustomTheme from Themes subfolder
import BlueTheme from '../themes/Theme';


// Element UI TextFields, Buttons and Links
function LogIn() {
  return (
    <ThemeProvider theme={BlueTheme} >
      <Container >
        <Stack spacing={2} alignItems="center" direction="column" >
          <TextField color='primary' label="Username" variant="outlined" sx={{ mt: 2 }} />
          <TextField color='primary' label="Password" variant="outlined" type='password' />
          <Button color='primary' variant='contained' size="large" sx={{ mb: 1 }} >Log In
          </Button >
        </Stack >
        <Stack 
          spacing={4} 
          direction="row" 
          justifyContent="center" 
          sx={{ 
            mt: 2,
            mb: 1
          }} >
          <Link href="forgot" color='primary' variant="body1" >
            Forgot password?
          </Link >
          <Link href="sign-up" color='primary' variant="body1" >
            {"No account? Sign Up"}
          </Link >
        </Stack >
      </Container >
    </ThemeProvider >
  );
}

export default LogIn;