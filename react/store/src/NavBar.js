import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div class="NavBar">
      <div class="centered-container" id="pages">
        <button class="nav-button"><a href='index.html'>Home</a></button>
        <button class="nav-button"><a href='products.html'>Products</a></button>
        <button class="nav-button"><a href='about.html'>About</a></button>
        <button class="nav-button"><a href='contact.html'>Contact</a></button>
      </div>
    </div>    
  );
}

export default NavBar;
