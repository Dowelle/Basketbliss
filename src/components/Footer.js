import React from 'react'
import './Footer.css'
import Call from '../assets/call.png'
import Mail from '../assets/mail.png'
import Facebook from '../assets/facebook.png'
import Tiktok from '../assets/tiktok.png'
import Instagram from '../assets/instagram.png'

function Footer({merchantDetails}) {
  return (
    <footer>
          <div className="social-container">
            <img src={ Facebook } />
            <img src={ Instagram } />
            <img src={ Tiktok } />
          </div>
          <div className="footer-middle">
            <p>{merchantDetails.address}</p>
            <div className="contact-container">
              <div className="contact-footer"> <img src={Call} /> {merchantDetails.merchantNumber} </div>
              <div className="contact-footer"> <img src={Mail}/> {merchantDetails.merchantEmail}</div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>Made with Basketbliss</p>
          </div>
     </footer>
  )
}

export default Footer
