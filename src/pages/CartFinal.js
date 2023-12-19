
import React from 'react';
import './CartFinal.css';

export function CartFinal() {
  return (
    <div className="container">
      <div>
        
        <h1 className="cart-heading">My Shopping Cart</h1>
      </div>

      {/* Container */}
      <div className="cart-item">
        <div className="cart-item-row">
          <h2 className="cart-item-text">White Dress</h2>
          <h2 className="cart-item-text">x2</h2>
          <h2 className="cart-item-text">P143</h2>
          <button className="remove-button">Remove</button>
        </div>
      </div>
      <div className="cart-item">
        <div className="cart-item-row">
          <h2 className="cart-item-text">White Dress</h2>
          <h2 className="cart-item-text">x2</h2>
          <h2 className="cart-item-text">P143</h2>
          <button className="remove-button">Remove</button>
        </div>
      </div>
      <button className="check">Checkout</button>
    </div>
  );
}
export default CartFinal
