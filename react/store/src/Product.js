import React from 'react';
import './Product.css';
//import cupsPicture from './assets/pots/cups.jpg';

const Product = (props) => {
  var imgpath = props.imgsrc;
  console.log('Here are the received props:');
  console.log(props);
  console.log(props.imgsrc);
  console.log(props.title);
  return (
    <div class="Product">
      <img src={imgpath} alt="Product" />
      <div class="Card-rest">
          <div class="Desc">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
          </div>
          <button class="buy-button">
            <p id="button-text">Buy for €{props.price}</p>
          </button>
      </div>                
    </div>    
  );
}

export default Product;
