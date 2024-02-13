import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Container, Stack, TextField } from '@mui/material';
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
      <Container >
        <form onSubmit={handleSubmit}>
        <Stack spacing={2} alignItems="center" direction="column" >
          <TextField value={userText} onChange={handleUserInputChange} color='primary' label="Username" variant="outlined" sx={{ mt: 2 }} />
          <TextField value={passText} onChange={handlePassInputChange} color='primary' label="Password" variant="outlined" type='password' />
          <Button type='submit' color='primary' variant='contained' size="large" sx={{ mb: 1 }} >
            Verify
          </Button >
        </Stack >
        </form >
      </Container >
      
    </ThemeProvider >
  );
}

export default LogIn;