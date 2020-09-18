import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import DisplayGrid from './DisplayGrid.js';

function App() {
  const [cart] = useState([]);
  
  return (
    
    
    <div className="App">
      <NavBar />
      
      <DisplayGrid />
    </div>
  );
}

export default App;