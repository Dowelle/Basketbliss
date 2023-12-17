import React from 'react'
import './Checkout.css'
import namepage from '../assets/logobasket.png'
import arrow from '../assets/leftarrow.png'
import Ellipse from '../assets/ellipse.png'
import Ellipse1 from '../assets/ellipse01.png'
import QRcode from '../assets/qrcode.jpg'
import dress from '../assets/dress2.jpg'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'

export const Checkout = () => {
  const navigate = useNavigate()
  return (
    <div /*className='container_navbar'*/>
      <div className="first_imge">
          <img className="ellipse" alt="Ellipse" src={Ellipse} />
          <img className="ellipse_01" alt="Ellipse" src={Ellipse1} />
        </div>
      
      <header>
        <div className='back-button'> 
          <img className='bow' alt='' src={arrow}/>
          <Link to="/Cart">
          <div>Back to Cart</div>
          </Link>
        </div>
        <div className='logo'>
            <p>Basketbliss</p>
            <img className='logo_page' alt='' src={namepage}/>
        </div>
      </header>

      <section className='title-checkout'><h1>Checkout</h1></section>
      
      <section className='checkout-container'>
        <div className='shipping_details-container'>
          <div className='header-shipping_details'>
            <div>Shipping Details</div>
            <span/>
          </div>
          <div className='shipping-inputs'>
            <input type='text' placeholder='EMAIL*' />
            <input type='text' placeholder='FULL NAME*' />
            <input type='text' placeholder='ADDRESS*' />
            <input type='text' placeholder='CONTACT NUMBER*' />
          </div>
          <div className='payment_details-container'>
            <img src={QRcode}/>
          </div>
          <div className='purchase-button'>
            <p>PURCHASE</p>
          </div>
        </div>
        <div className='order_details'>
          <h3>YOUR ORDER</h3>
          <span></span>
          <div className='orders'>
            <div className='order'>
              <div className='order-left'>
                <img src={dress}/>
                <div className='order-qty'>
                  <p>Apron Dress</p>
                  <p>Qty: 1</p>
                </div>
              </div>
              <div className='price'><p>₱ 300</p></div>
            </div>
            <div className='order'>
              <div className='order-left'>
                <img src={dress}/>
                <div className='order-qty'>
                  <p>Apron Dress</p>
                  <p>Qty: 1</p>
                </div>
              </div>
              <div className='price'><p>₱ 300</p></div>
            </div>
            <div className='total-container'>
              <div className='total'>
                <div>SUBTOTAL</div>
                <div>SHIPPING</div>
                <div>TOTAL</div>
              </div>
              <div className='total'>
                <div>₱ 400</div>
                <div>₱ 0</div>
                <div>₱ 400</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
export default Checkout;