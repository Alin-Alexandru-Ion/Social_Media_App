import React from 'react'
import './Header.css'

function Header() {
    return (
      <header className='header'>
        <nav className="nav">
          <div className='nav-left'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" className='logo' />
            <h1>My First React App</h1>
          </div>
          <div className='nav-right'>
            <ul className="list">
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }

  export default Header;