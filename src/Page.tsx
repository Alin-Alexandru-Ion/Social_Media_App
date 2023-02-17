import React from 'react';

import './Page.css';

import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';


function Page() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Page;