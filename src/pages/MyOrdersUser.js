import React, { useEffect, useState } from 'react'
import './MyOrderUser.css'

import MyOrder from '../assets/MyOrder.png';
import Nav from '../components/Nav';
import { getUser } from '../services/firebaseActions';
import ViewOrder from './ViewOrder';


function MyOrdersUser({merchantProducts}) {
  const [orders, setOrders] = useState([])
  const [selectedOrder, setSelectedOrder] = useState(null);

  const setSelect = () => {
    setSelectedOrder(null)
  }

  const viewComponent = () => {
    console.log(merchantProducts);
    return selectedOrder ? <ViewOrder merchantProducts={merchantProducts} setSelect={setSelect} order={selectedOrder} /> : null;
  };

  useEffect(() => {
    const userId = sessionStorage.uid;

    getUser(userId).then(data => {
      setOrders(data.orders)
    })
  }, [])

  return (
    <div className="MyOrder">
      <div className="myOrderTop">
        <h1 className="order-h1">My Order</h1>
        <img src={ MyOrder }/>
      </div>

      <table>
        <tr>
            <th>Order ID</th>
            <th>Price</th>
            <th>Date Placed</th>
            <th>Order Status</th>
        </tr>
        {
          orders ? orders.map(order => (
            <tr>
            <td onClick={() => setSelectedOrder(order)} className="order-id">{order.id?.split('_')[0] + '...'}</td>
            <td>P{order.total}</td>
            <td>{order.datePlaced}</td>
            <td style={{pointerEvents:"none"}}>
              {order.status}
            </td>
            </tr>
          )) : <div>No Orders</div>
        }
      </table>

      {viewComponent()}
    </div>
  )
}

export default MyOrdersUser
