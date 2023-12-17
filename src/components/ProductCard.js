import React, { useEffect, useState } from 'react'
import './ProductCard.css'

import Dress1 from '../assets/dress1.jpg'

function ProductCard({product}) {
  const [productDetails, setProductDetails] = useState({})

  useEffect(() => {
    setProductDetails(product)
  }, [product])

  return (
    <div className="products-container">
        <div className="product">
            <img src={ productDetails.pictures ? productDetails.pictures[0] : ''}/>
            <h2>{`₱${productDetails.productPrice}`}</h2>
        </div>
    </div>
  )
}

export default ProductCard
