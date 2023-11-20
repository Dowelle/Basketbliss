import { useState } from 'react';
import React from 'react';
import './Landing.css';

import { Link } from 'react-router-dom';

import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';

// import pic3 from '../assets/pic3.jpg';
// import pic2 from '../assets/pic2.jpg';
// import pic1 from '../assets/pic1.jpg';
// import Registration from './Registration';
// import Signin from './Signin';

function Landing() {
  const [isOpenSignin, setIsOpenSignin] = useState(true);
  const [isOpenLogin, setIsOpenLogin] = useState(true);
  const [isOpenRegister, setIsOpenRegister] = useState(true);

  const handleToggleSignin = () => {
    setIsOpenSignin(!isOpenSignin);
  };

  const handleToggleLogin = () => {
    setIsOpenLogin(!isOpenLogin);
  };

  const handleToggleRegister = () => {
    setIsOpenRegister(!isOpenRegister);
  };


  return (
    <div className="Landing">
      <div className="top">
        <h1>Basketbliss</h1>
        <div className="internal-links">
          <h3>Contact</h3>
          <h3>About</h3>
          <h3>FAQ</h3>
        </div>
        <div className="auth">
          <button onClick={handleToggleSignin} className="signin">Sign in</button>
          <button onClick={handleToggleRegister} className="register">Log in</button>
        </div>
      </div>

      <div className="middle">
        <div className="title">
          <h1>Your <span>Shop</span> , Your <span>Rules</span> :</h1>
          <h1>Craft Your Online Storefront</h1>
        </div>

          <div className="about">
            <h3>About</h3>
            <p>at Basketbliss, we're on a mission to revolutionize online presence management. We believe in simplicity, customization, and security as the pillars of digital success. Our commitment to innovation and user-friendly solutions sets you up to thrive in the rapidly evolving online landscape. Join us on this exciting journey to create distinctive, effective, and memorable online experiences.</p>
          </div>

          <div className="contact">
            <h3>Contact</h3>
            <div className="socials">
              <img src={facebook} alt=""/>
              <img src={twitter} alt=""/>
              <img src={instagram} alt=""/>
            </div>
            <p>basketbliss@gmail.com</p>
            <p className="address">Olongapo City, Zamabales, Philippines</p>

          </div>

      </div>
      {/* <div className="bottom">
        <img className="longpic" alt="" src={pic1}/>
        <img className="shortpic" alt="" src={pic2}/>
        <img className="longpic" alt="" src={pic3}/>
      </div> */}

      <div className="open_signin" style={{ display: isOpenSignin ? 'none' : 'flex' }}>
        <div className="upper">
          <h1>Create an account</h1>
          <button onClick={handleToggleSignin}>X</button>
        </div>
        <input
        type="email"
        placeholder="Email"
        />
        <input
        type="password"
        placeholder="Enter password"
        />
        <input
        type="password"
        placeholder="Confirm password"
        />
        <button className="submit">Submit</button>
      </div>

      <div className="open_login" style={{ display: isOpenRegister ? 'none' : 'flex' }}>
        <div className="upper">
          <h1>Log in an account</h1>
          <button onClick={handleToggleRegister}>X</button>
        </div>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Enter password" />
        <button className="submit">Submit</button>
      </div>
      

      <marquee>heyyyy</marquee>
    </div>
  )
}

export default Landing;