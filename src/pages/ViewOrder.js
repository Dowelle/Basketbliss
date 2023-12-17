import React from 'react'
import './ViewOrder.css'
import Dress1 from '../assets/dress1.jpg'

import { useNavigate } from 'react-router-dom';

function ViewOrder() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="ViewOrder">
      <div style={{
        display:"flex",
        alignItems:"center",
        gap:"1rem",
        marginBottom:"2rem"
      }}>
        <button style ={{
          height:"50%",
          backgroundColor:"#DAF0F7",
          padding:".5rem",
          fontSize:"2em"
        }} onClick={handleGoBack}>&#8592;</button>
        <h1>Item Details</h1>
      </div>
      <div className="container-order">
        <div className="order-card">
          <img src={ Dress1 }/>
          <div className="order-details">
            <h2>White Dress</h2>
            <h2>P143.00</h2>
            <p>x1</p>
          </div>
        </div>

        <div className="order-card">
          <img src={ Dress1 }/>
          <div className="order-details">
            <h2>White Dress</h2>
            <h2>P143.00</h2>
            <p>x1</p>
          </div>
        </div>

        <div className="order-card">
          <img src={ Dress1 }/>
          <div className="order-details">
            <h2>White Dress</h2>
            <h2>P143.00</h2>
            <p>x1</p>
          </div>
        </div>

        <div className="order-card">
          <img src={ Dress1 }/>
          <div className="order-details">
            <h2>White Dress</h2>
            <h2>P143.00</h2>
            <p>x1</p>
          </div>
        </div>

        <div className="order-card">
          <img src={ Dress1 }/>
          <div className="order-details">
            <h2>White Dress</h2>
            <h2>P143.00</h2>
            <p>x1</p>
          </div>
        </div>

        <div className="order-card">
          <img src={ Dress1 }/>
          <div className="order-details">
            <h2>White Dress</h2>
            <h2>P143.00</h2>
            <p>x1</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewOrder
