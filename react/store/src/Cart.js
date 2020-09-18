import React, { useState } from 'react';
// Styling:
import './DisplayGrid.css';
// The card we will be using is the following component:
import Product from './Product.js';
// Product data is specified in a JSON file:
import products from './products.json';

function Cart() {

  const [cart, updateCart] = useState([

  ])

  const addToCart = (product) => {
    updateCart([...cart, product]);
  }

  return (
    <div class="DisplayGrid">
        {products.map(p => <Product imgsrc={p.imgsrc} title={p.title} desc={p.desc} price={p.price}/>)}
    </div>    
  );
}
export default DisplayGrid;