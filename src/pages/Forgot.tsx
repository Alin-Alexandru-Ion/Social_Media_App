import React from 'react'

import './Forgot.css'

import { Button, FormControl, InputLabel, MenuItem, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// Import CustomTheme from Themes subfolder
import BlueTheme from '../themes/Theme';


// Element UI TextFields, Buttons and Links
function SignUp() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <ThemeProvider theme={BlueTheme}>
      <div className='text-fields'>
        <TextField className='user' color='secondary' label="Username" variant="outlined" />

        <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
        <InputLabel id="demo-simple-select-filled-label">Secret question</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={1}>What's the name of your favorite Pet?</MenuItem>
          <MenuItem value={2}>What's the name of your first school?</MenuItem>
          <MenuItem value={3}>What's the name of the first street you lived on?</MenuItem>
        </Select>
      </FormControl>

      </div>
      <div className='reset-button'>
        <Button color='primary' variant='contained'>Reset Password</Button>
      </div>
    </ThemeProvider>
  );
}

export default SignUp;