import React from 'react';
<<<<<<< HEAD
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
=======
>>>>>>> be1183984b7535c6f475e6bcb8a564e7d38e17e1
import './App.css';

function Header() {
  return (
<<<<<<< HEAD
    <header>
      <nav className="nav-items">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" className='logo' />
=======
    <div>
      <nav className="nav-items">
        <header>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="logo" />
        </header>
>>>>>>> be1183984b7535c6f475e6bcb8a564e7d38e17e1
        <ul className="list">
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
<<<<<<< HEAD
    </header>
  );
}

function MainContent() {
  return (
    <div>
      <h1>First React Project</h1>
      <ol>
        <li>Node.js Server</li>
        <li>Typescript</li>
        <li>React</li>
        <li>Material UI</li>
      </ol>
    </div>
  );
=======
    </div>
  )
>>>>>>> be1183984b7535c6f475e6bcb8a564e7d38e17e1
}

function Footer() {
  return (
<<<<<<< HEAD
    <footer>
      <p className="rights">© 2023 AAI Development. All rights reserved.</p>
    </footer>
  );
}

function ButtonTest() {
  return (
    <div className='button-group'>
      <Button variant="contained">Log in</Button>
      <Button variant="contained">Register</Button>
    </div>
  );
=======
    <div>
      <footer>
        <p className="rights">©2023 AAI Development. All rights reserved.</p>
      </footer>
    </div>
  )
>>>>>>> be1183984b7535c6f475e6bcb8a564e7d38e17e1
}

function App() {
  return (
    <div className="App">
      <Header />
<<<<<<< HEAD
      <MainContent />
      <ButtonTest />
=======
      <h1>First React Project</h1>
        <ol>
          <li>Node.js Server</li>
          <li>Typescript</li>
          <li>React</li>
          <li>Material UI</li>
        </ol>
>>>>>>> be1183984b7535c6f475e6bcb8a564e7d38e17e1
      <Footer />
    </div>
  );
}

export default App;