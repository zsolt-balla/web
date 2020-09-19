import React from 'react';
// Styling:
import './DisplayCart.css';
// The card we will be using is the following component:
import CartItem from './CartItem.js';

const DisplayCart = (props) => {

  //const cart = useState(props.cart);
  const cart = props.cartContent;
  var dropFunction = props.dropFunc;

  return (
    <>
      <div class="DisplayCart">
          {cart.map(i => <CartItem content={i} behaviour={dropFunction}/>)}
      </div>
    </>
  );
}
export default DisplayCart;
