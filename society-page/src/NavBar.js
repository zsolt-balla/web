import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div class="NavBar">
      
      <div id="banner1">
        <div class="centered-container" id="logonamecont">
          <img src="pots/logo.png" id="logo"/>
          <p>University Society Name</p>
        </div>
      </div>
      
      
      <div id="banner2">
        <div class="centered-container" id="pages">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/membership'>Membership</Link>
          <Link to='/events'>Events</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/sponsors'>Sponsors</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>

    </div>    
  );
}

export default NavBar;
