import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import DisplayGrid from './DisplayGrid.js';
import DisplayCart from './DisplayCart.js';
import Footer from './Footer.js';

function App() {
  const [cart, setCart] = useState([])
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

  // The removal does seem to work, however the rendering is not refreshed for some reason :/
  const removeItem = (product) => {
    const removePassedProp = () => {
      // get index of object with given title
      //var temp = cart;
      //var removeIndex = temp.map(function(item) { return item.title; }).indexOf(product.title);
      console.log('Trying to remove object product with title ' + product.title);
      // remove object
      //temp.splice(removeIndex, 1);
      //setCart(temp);
      var removeIndex = cart.map(function(item) { return item.title; }).indexOf(product.title);
      cart.splice(removeIndex, 1);
    }
    return(removePassedProp);
  }
  
  return (
    <div className="App">
      <NavBar />
      <DisplayGrid buyFunc={addItemToCart}/>
      <DisplayCart cartContent={cart} dropFunc={removeItem}/>    
      <Footer />
    </div>
  );
}
export default App;
