import React from 'react';
import './App.css';

function Header() {
  return (
    <div>
      <nav className="nav-items">
        <header>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="logo" />
        </header>
        <ul className="list">
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

function Footer() {
  return (
    <div>
      <footer>
        <p className="rights">©2023 AAI Development. All rights reserved.</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <h1>First React Project</h1>
        <ol>
          <li>Node.js Server</li>
          <li>Typescript</li>
          <li>React</li>
          <li>Material UI</li>
        </ol>
      <Footer />
    </div>
  );
}

export default App;