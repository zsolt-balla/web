import React, { useState } from 'react';
import './App.css';
import DisplayGrid from './DisplayGrid.js';
import DisplayCart from './DisplayCart.js';

function App() {
  const [cart, setCart] = useState([]);
  // Probably the ugliest and most convoluted callback solution you've ever seen.
  // [I had a hard time understanding how passing objects from child to parent should work.]
  //
  // This function takes a product as a prop and returns another method that, when called,
  // adds said product to the cart. Yuck.
  const addItemToCart = (product) => {
    
    const addPassedProp = () => {
      console.log('Adding product to cart: ' + product.title);
      setCart([...cart, product]);
      
    }
    return(addPassedProp);
  }

  const cartOpen = useState(false);

  const searchTerm = useState('');

  // The removal does seem to work, however the rendering is not refreshed for some reason :/
  const removeItem = (product) => {
    const removePassedProp = () => {
      // temp list (reference needs to change in order to automatically rerender)
      const temp = [...cart];
      // get index of object with given title
      var removeIndex = temp.map(function(item) { return item.title; }).indexOf(product.title);
      console.log('Trying to remove object product with title ' + product.title);
      // remove object
      temp.splice(removeIndex, 1);
      setCart(temp);
      
      // Short version without using setCart method:
      // var removeIndex = cart.map(function(item) { return item.title; }).indexOf(product.title);
      // cart.splice(removeIndex, 1);
    }
    return(removePassedProp);
  }
  
  const open = 300;
  const closed = 0;
  var sideWidth = useState(closed);

  const panelStyle = {
    width: sideWidth,
    background: "#DDDDDD"
  }

  

  return (
    <div className="App">
      <DisplayGrid buyFunc={addItemToCart}/>
      <DisplayCart cartContent={cart} dropFunc={removeItem}/>        
    </div>
  );
}
export default App;
