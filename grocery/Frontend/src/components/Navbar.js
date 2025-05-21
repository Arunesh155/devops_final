// Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/logo.jpeg';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <a className="brand" href="./home">
          <img src={Logo} alt="Logo" className="logo" />
          Grocerly
        </a>
        <div className="nav-links">
          <a href="/about" className="nav-link">
            About
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
          <a href="/cart" className="nav-link">
            Cart
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
