import React from 'react'
import './Footer.css'
import Call from '../assets/call.png'
import Mail from '../assets/mail.png'
import Facebook from '../assets/facebook.png'
import Tiktok from '../assets/tiktok.png'
import Instagram from '../assets/instagram.png'

function Footer() {
  return (
    <footer>
          <div className="social-container">
            <img src={ Facebook } />
            <img src={ Instagram } />
            <img src={ Tiktok } />
          </div>
          <div className="footer-middle">
            <p>#37 Nueva Ecija Street Brgy. Barretoo, Olongapo City</p>
            <div className="contact-container">
              <div className="contact-footer"> <img src={Call} /> +123456789123 </div>
              <div className="contact-footer"> <img src={Mail}/> mondowelle00@gmail.com</div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>Made with Basketbliss</p>
          </div>
     </footer>
  )
}

export default Footer
