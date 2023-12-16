import React from 'react'
import './Analytics.css'

import Nav from '../components/Nav'

import Dashboard from '../assets/dashboard.png';
import Order from '../assets/order-delivery.png';
import Customer from '../assets/customer.png';
import Profit from '../assets/profit.png';

function Analytics() {
  return (
    <div className="Analytics">
      <Nav/>
      <h1>Admin Dashboard</h1>
      <div className="analytics-container">
        <div className="analytics-details">
          <div className="analytics-details-top">
            <p>Traffic Today</p>  <img src={ Dashboard }/>
          </div>
          <p className='analytics-value'>420</p>
        </div>

        <div className="analytics-details">
          <div className="analytics-details-top">
            <p>Total Customers</p>  <img src={ Customer }/>
          </div>
          <p className='analytics-value'>420</p>
        </div>

        <div className="analytics-details">
          <div className="analytics-details-top">
            <p>Orders Today</p>  <img src={ Order }/>
          </div>
          <p className='analytics-value'>420</p>
        </div>

        <div className="analytics-details">
          <div className="analytics-details-top">
            <p>Expected Earning</p>  <img src={ Profit }/>
          </div>
          <p className='analytics-value'>420</p>
        </div>

        <div className="analytics-details">
          <div className="analytics-details-top">
            <p>Expected Earning</p>  <img src={ Profit }/>
          </div>
          <p className='analytics-value'>420</p>
        </div>
      </div>

      <div className="orders">
        <h2>Orders</h2>
        <table>
          <tr>
            <th >Order ID</th>
            <th>Order Name</th>
            <th>Price</th>
            <th>Expected Delivery</th>
            <th>Status</th>
          </tr>

          <tr>
            <td className="order-id">42069</td>
            <td>Dowelle Dayle Mon</td>
            <td>P143</td>
            <td> <input type="date" className="date"/> </td>
            <td>
              <select>
                <option>Order Placement</option>
                <option>Order Packing</option>
                <option>Order Shipped</option>
                <option>Out for Delivery</option>
                <option>Delivered</option>
                <option className="cancel-order">Cancel Order</option>
              </select>
            </td>
          </tr>

          
        </table>
      </div>
    </div>
  )
}

export default Analytics
