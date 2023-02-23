import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Forgot from './pages/Forgot';
import Footer from './Footer';


function Page() {
  return (
    <div >
      <Header />
      <Router >
        <Routes >
          <Route path="/" element={<LogIn />} />
          <Route path="/log-in" element={<LogIn />}
          />
          <Route path="/sign-up" element={<SignUp />}
          />
          <Route path="/forgot" element={<Forgot />}
          />
        </Routes >
      </Router >
      <Footer />
    </div >
  );
}

export default Page;