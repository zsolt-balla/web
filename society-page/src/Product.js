import React from 'react';
import './Product.css';

const Product = (props) => {
  var p = props.content;
  var imgpath = p.imgsrc;
  
  return (
    <div class="Product">
      <img src={imgpath} alt="Product" />
      <div class="Card-rest">
          <div class="Desc">
            <h1>{p.title}</h1>
            <p>{p.desc}</p>
          </div>
      </div>                
    </div>
  );
}

export default Product;
