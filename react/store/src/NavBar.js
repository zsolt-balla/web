import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div class="NavBar">
      <div class="centered-container" id="pages">
        <button class="nav-button"><Link to='/'>Home</Link></button>
        <button class="nav-button"><Link to='/products'>Products</Link></button>
        <button class="nav-button"><Link to='/about'>About</Link></button>
        <button class="nav-button"><Link to='/contact'>Contact</Link></button>
      </div>
    </div>    
  );
}

export default NavBar;
