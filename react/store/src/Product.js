import React from 'react';
import './Product.css';
//import cupsPicture from './assets/pots/cups.jpg';

const Product = (props) => {
  //Instead of the values within the object from the JSON, I pass
  //down the entire object as a single, unified item. I hope this will 
  //make the backwards referencing easier when making the cart, as the whole 
  //object can be passed to the onClick handler.

  //Props also includes:
  
  var p = props.content;
  var makeFunction = props.behaviour(p);
  var imgpath = p.imgsrc;
  
  
  
  return (
    <div class="Product">
      <img src={imgpath} alt="Product" />
      <div class="Card-rest">
          <div class="Desc">
            <h1>{p.title}</h1>
            <p>{p.desc}</p>
          </div>
          <button onClick={makeFunction} class="buy-button">
            <p id="button-text">Buy for €{p.price}</p>
          </button>
      </div>                
    </div>
  );
}

export default Product;
