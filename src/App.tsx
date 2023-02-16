import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import './App.css';

function Header() {
  return (
    <header>
      <nav className="nav-items">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" className='logo' />
        <ul className="list">
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
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
}

function Footer() {
  return (
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
}

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <ButtonTest />
      <Footer />
    </div>
  );
}

export default App;