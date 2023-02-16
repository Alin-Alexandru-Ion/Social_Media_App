import React from 'react'
import './Header.css'

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

  export default Header;