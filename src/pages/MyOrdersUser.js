import React from 'react'
import './MyOrderUser.css'

import MyOrder from '../assets/MyOrder.png';
import Nav from '../components/Nav';


function MyOrdersUser() {
  return (
    <div className="MyOrder">
      <div className="myOrderTop">
        <h1 className="order-h1">My Order</h1>
        <img src={ MyOrder }/>
      </div>
      <Nav/>

      <table>
        <tr>
            <th>Order ID</th>
            <th>Price</th>
            <th>Expected Date</th>
            <th>Order Status</th>
        </tr>
        <tr>
            <td className="order-id">21221</td>
            <td>P143</td>
            <td> <input style={{pointerEvents:"none"}} type="date" className="date" /> </td>
            <td style={{pointerEvents:"none"}}>
                <select>
                    <option>Order Placement</option>
                    <option>Order Packing</option>
                    <option>Order Shipped</option>
                    <option>Out for Delivery</option>
                    <option>Delivered</option>
                </select>
            </td>
        </tr>
      </table>
    </div>
  )
}

export default MyOrdersUser
