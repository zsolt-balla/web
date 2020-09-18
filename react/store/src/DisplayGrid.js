import React, { useState } from 'react';
// Styling:
import './DisplayGrid.css';
// The card we will be using is the following components:
import Product from './Product.js';
import CartItem from './CartItem.js';
// Product data is specified in a JSON file:
import products from './products.json';

function DisplayGrid() {

  const [cart, setCart] = useState([

  ])

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
      var temp = cart;
      var removeIndex = temp.map(function(item) { return item.title; }).indexOf(product.title);
      console.log('Trying to remove object product with index ' + removeIndex);
      // remove object
      temp.splice(removeIndex, 1);
      setCart(temp);
    }
    return(removePassedProp);
  }

  return (
    <>
      <div class="DisplayGrid">
          {products.map(p => <Product content={p} behaviour={addItemToCart}/>)}
      </div>
      <div class="DisplayCart">
        {cart.map(i => <CartItem content={i} behaviour={removeItem}/>)}
      </div>
    </>
  );
}
export default DisplayGrid;