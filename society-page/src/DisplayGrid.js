import React from 'react';
// Styling:
import './DisplayGrid.css';
// The card we will be using is the following components:
import Product from './Product.js';
/*import jsonfile from './filename.json';*/
var jsonfile = {} /* delete if there is a file */

const DisplayGrid = (props) => {
  return (
    <div className="DisplayGrid">
      {jsonfile.map(p => <Product content={p}/>)}
    </div>
  );
}
export default DisplayGrid;