import React, { useEffect, useState } from 'react'

import { useNavigate } from "react-router-dom";
import { Button, Container, Link, Stack, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

// Import CustomTheme from Themes subfolder
import BlueTheme from '../themes/Theme';

import axios from 'axios';

type User = {
    id: number;
    username: string;
    password: string;
  };


// Element UI TextFields, Buttons and Links
function LogIn() {

  const [users, setUsers] = useState<User[]>([]);
  const [userText, setUserText] = useState('');
  const [passText, setPassText] = useState('');
  const navigate = useNavigate();
  

  //Handle TextField Values At Use
  const handleUserInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserText(event.target.value);
  };
  const handlePassInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassText(event.target.value);
  };


  //Get Users Data
  useEffect(() => {
    axios.get<User[]>('http://localhost:3001/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  //Modify Submit Functionality
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const userDB = users.map(user => user.username);
    const passDB = users.map(user => user.password);

    //Dummy Login Check
    if (userText === userDB.toString() && passText === passDB.toString())
    {
      navigate('/observer')
    }
    else
    {
      navigate('/forgot')
    }
  };


  return (
    <ThemeProvider theme={BlueTheme} >
      <Container sx={{width: '75%', height: '100%'}}>
        <form onSubmit={handleSubmit}>
        <Stack spacing={2} alignItems="center" direction="column" >
          <TextField value={userText} onChange={handleUserInputChange} color='primary' label="Username" variant="outlined" sx={{ mt: 2 }} />
          <TextField value={passText} onChange={handlePassInputChange} color='primary' label="Password" variant="outlined" type='password' />
          <Button type='submit' color='primary' variant='contained' size="large" sx={{ mb: 1 }} >
            LOG IN
          </Button >
        </Stack >
        </form >
        <Stack 
          spacing={4} 
          direction="row" 
          justifyContent="center" 
          sx={{ 
            mt: 2,
            mb: 1
          }} 
        >
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