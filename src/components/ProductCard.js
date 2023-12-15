import React from 'react'
import './ProductCard.css'

import Dress1 from '../assets/dress1.jpg'

function ProductCard() {
  return (
    <div className="products-container">
        <div className="product">
            <img src={ Dress1 }/>
            <h2>₱299</h2>
        </div>
    </div>
  )
}

export default ProductCard
