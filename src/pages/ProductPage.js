import React from 'react';
import './ProductPage.css';

import dress1 from '../assets/dress1.jpg';

function ProductPage() {
  return (
    <div className="ProductPage">
      <div className="productPage-left">
        <img className="mainPic" src={dress1} alt=""/>
        <p>This is sample This is sample This is sample This is sample This is sample This is sample This is sample This is sample </p>
      </div>
      <div className="productPage-right">
        <h1>Sample product name</h1>
        <h2>₱100</h2>
        <div>
          <h2>Sizes</h2>
          <div className="productPage-buttons">
            <button>S</button>
            <button>M</button>
            <button>L</button>
          </div>
        </div>
        <div className="quantity">
          <h2>Quantity</h2>
          <input type="number" />
        </div>
        <div className="cart">
          <button>Buy now</button>
          <button>Add to cart</button>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default ProductPage