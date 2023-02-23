import React from 'react'

import './Forgot.css'

import { Button, Container, FormControl, InputLabel, MenuItem, Stack, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// Import CustomTheme from Themes subfolder
import BlueTheme from '../themes/Theme';


// Element UI TextFields, Buttons and Links
function SignUp() {
  const [question, setQuestion] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setQuestion(event.target.value);
  };

  return (
    <ThemeProvider theme={BlueTheme} >
      <Container >
        <Stack direction="column" alignItems="center" spacing={2} >
          <TextField className='user' color='primary' label="Username" variant="outlined" sx={{ mt: 2 }} />
  
          <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
            <InputLabel id="secret-question">Secret question </InputLabel >
            <Select
              labelId="secret-question"
              id="secret-question-filled"
              value={question}
              onChange={handleChange}
            >
              <MenuItem value={1}> What's the name of your favorite Pet? </MenuItem >
              <MenuItem value={2}> What's the name of your first school? </MenuItem >
              <MenuItem value={3}> What's the name of the first street you lived on? </MenuItem >
            </Select >
          </FormControl >
          <TextField className='answer' color='primary' label="Secret answer" variant="outlined" />
          <Button color='primary' variant='contained' >Reset Password </Button >
        </Stack >
      </Container >
    </ThemeProvider >
  );
}

export default SignUp;