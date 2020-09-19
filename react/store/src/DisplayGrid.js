import React from 'react';
// Styling:
import './DisplayGrid.css';
// The card we will be using is the following components:
import Product from './Product.js';
//import CartItem from './CartItem.js';
import products from './products.json';

const DisplayGrid = (props) => {
  const add = props.buyFunc;
  return (
    <div class="DisplayGrid">
      {products.map(p => <Product content={p} behaviour={add}/>)}
    </div>
  );
}
export default DisplayGrid;