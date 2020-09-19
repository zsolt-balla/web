import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
  //Instead of the values within the object from the JSON, I pass
  //down the entire object as a single, unified item. I hope this will 
  //make the backwards referencing easier when making the cart, as the whole 
  //object can be passed to the onClick handler.

  //Props also includes: The function to run when button is clicked
  var p = props.content;
  // creating the function with specified product object:
  var buttonFunction = props.behaviour(p);
  var imgpath = p.imgsrc;
  
  return (
    <div class="CartItem">
        <img src={imgpath} alt="Product in cart" />
        <div class="summary">
            <h1>{p.title} - €{p.price}</h1>
        </div>
        <button onClick={buttonFunction} class="DropButton">
            <p id="button-text">Drop</p>
        </button>                
    </div>
  );
}

export default CartItem;
