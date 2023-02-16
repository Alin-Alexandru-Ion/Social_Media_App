import React from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';

import './Page.css';

import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';


function ButtonTest() {
  return (
    <div className='button-group'>
      <Button variant="contained">Log in</Button>
      <Button variant="contained">Register</Button>
    </div>
  );
}

function Page() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <ButtonTest />
      <Footer />
    </div>
  );
}

export default Page;