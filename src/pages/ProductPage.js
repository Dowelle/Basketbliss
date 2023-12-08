import React from 'react';
import './ProductPage.css';

import dress1 from '../assets/dress1.jpg';
import cart2 from '../assets/cart2.png';
import checkout from '../assets/payment-method.png'

function ProductPage() {
  return (
    <div className="ProductPage">
      <div className="product-page-container">
      <div className="companyName">
          <span>S</span>
          <span>E</span>
          <span>D</span>
          <span>A</span>
          <span>H</span>
          <span>S</span>
          <span>M</span>
          <span>A</span>
          <span>L</span>
          <span>G</span>
        </div>

        <div className="product-page-descriptions">
          <h2 className="latest">GLAMSHADES</h2>
          <h1>Your <span>Shop</span>, Your <span>Rules</span>:</h1>
          <p>This is a very beautiful dress made with cotton and love. It was wear by me of course sino pa ba bilihin niyo na mura pa</p>
          <div className="product-page-descriptions-button">
            <button><img src={ cart2 }/>  Add to Cart</button>
            <button><img src={ checkout }/>  Buy Now</button>
          </div>
        </div>

        <div className="product-page-mainpic">
          <img src={dress1} />
        </div>
        
        <div className="product-page-subpics">
          <img src={dress1} />
          <img src={dress1} />
          <img src={dress1} />
          <img src={dress1} />
        </div>

        <div className="product-page-price">
          <h3>Product name</h3>
          <p>₱420.69</p>
        </div>

      </div>
      <div>

      </div>
    </div>
  )
}

export default ProductPage