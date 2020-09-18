import React, { useState } from 'react';
// Styling:
import './DisplayCart.css';
// The card we will be using is the following component:
import Product from './Product.js';
// Product data is specified in a JSON file:
import products from './products.json';

function DisplayGrid() {

  const [cart, setCart] = useState([

  ])

  const [searchTerm, setSearchTerm] = useState('');
  
  // Probably the ugliest and most convoluted callback solution you've ever seen.
  // [I had a hard time understanding how passing objects from child to parent should work.]
  //
  // This function takes a product as a prop and returns another method that, when called,
  // adds said product to the cart. Yuck.
  const addItemToCart = (product) => {
    //console.log('Parent function ran!');
    //console.log(cart);
    
    const addPassedProp = () => {
      setCart([...cart, product]);
      console.log('Item added to cart.')
    }
    return(addPassedProp);
  }

  return (
    <>
      <div class="DisplayGrid">
          {products.map(p => <Product content={p} behaviour={addItemToCart}/>)}
          {cart.map(i => <CartItem content={i} behaviour={}/>)}
      </div>

    </>
  );
}
export default DisplayGrid;