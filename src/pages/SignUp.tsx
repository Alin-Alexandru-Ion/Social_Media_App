import React from 'react'

import './SignUp.css'

import { Button, FormControl, InputLabel, MenuItem, TextField } from '@mui/material';
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
    <ThemeProvider theme={BlueTheme}>
      <div className='text-fields'>
        <TextField className='user' color='primary' label="Username" variant="outlined" />
        <TextField className='pass' color='primary' label="Password" variant="outlined" type='password' />
        <TextField className='pass' color='primary' label="Confirm-Password" variant="outlined" type='password' />
        <TextField className='nick' color='primary' label="Nickname" variant="outlined" />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
        <InputLabel id="secret-question">Secret question</InputLabel>
        <Select
          labelId="secret-question"
          id="secret-question-filled"
          value={question}
          onChange={handleChange}
        >
          <MenuItem value={1}>What's the name of your favorite Pet?</MenuItem>
          <MenuItem value={2}>What's the name of your first school?</MenuItem>
          <MenuItem value={3}>What's the name of the first street you lived on?</MenuItem>
        </Select>
      </FormControl>
      <TextField className='answer' color='primary' label="Secret answer" variant="outlined" />
      </div>
      <div className='sign-up-button'>
        <Button color='primary' variant='contained'>Sign Up</Button>
      </div>
    </ThemeProvider>
  );
}

export default SignUp;