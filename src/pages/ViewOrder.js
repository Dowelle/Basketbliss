import React, { useEffect, useState } from 'react';
import './ViewOrder.css';
import Dress1 from '../assets/dress1.jpg';

import { getImageUrl } from '../services/firebaseActions';

function ViewOrder({ merchantProducts, order, setSelect }) {
  const [products, setProducts] = useState([])

  console.log(order);

  const handleGoBack = () => {
    setSelect()
  };

  useEffect(() => {
    const fetchData = async () => {
      if (merchantProducts) {
        try {
          const updatedProducts = await Promise.all(merchantProducts.map(async (merchantProduct) => {
            if (merchantProduct) {
              const urls = await getImageUrl(merchantProduct);
              merchantProduct.pictures = urls;
              return merchantProduct;
            }
          }));
  
          setProducts(order.items.map(item => {
            console.log(item)
            const pictureInfo = updatedProducts.find(updatedProduct => updatedProduct.id === item.productId);
          
            // Create a new object by combining information from both arrays
            return {
              productId: item.productId,
              productName: item.productName,
              quantity: item.quantity,
              totalPrice: item.totalPrice,
              picture: pictureInfo ? pictureInfo.pictures[0] : undefined, // Add pictures information
              // Add other fields from the picturesArray if needed
            };
          }))
          
        } catch (error) {
          // Handle errors
          console.error("Error updating products:", error);
        }
      }
    };
  
    fetchData(); // Invoke the asynchronous function immediately
  
  }, [merchantProducts]);

  return (
    <div className="popup">
      <div className="ViewOrder">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <button
            style={{
              height: '50%',
              backgroundColor: '#DAF0F7',
              padding: '.5rem',
              fontSize: '2em',
            }}
            onClick={() => {
              handleGoBack()
            }}
          >
            &#8592;
          </button>
          <h1>Order Details</h1>
        </div>
        <div className="container-order">
          {products ? products.map(product => (
            
          <div className="order-card">
          <img src={ product.picture }/>
          <div className="order-details">
            <h2>{product.productName}</h2>
            <h2>Qty: {product.quantity}</h2>
            <p>P{product.totalPrice}</p>
          </div>
          </div>
          )) : undefined}
        </div>
        
        <div>Name: {order.name}</div>
        <div>Address: {order.address}</div>
        <div>Contact Number: {order.contactNumber}</div>
        <div>Gcash Reference Number: {order.gcashReferenceNumber}</div>
        <div>Date Placed: {order.datePlaced} </div>
        <div>Order Status: {order.status} </div>
        <div>Order Total: P{order.total} </div>





      </div>
      
    </div>
  );
}

export default ViewOrder;
