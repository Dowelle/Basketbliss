import React from 'react'
import {Link } from 'react-router-dom';
import '../pages/Homepage.css';

import User from '../assets/user.png';
import Logout from '../assets/logout.png';
import Shop from '../assets/shop.png';
import Insight from '../assets/insight.png';
import Marketing from '../assets/marketing.png';
import People from '../assets/people.png';
import Question from '../assets/question.png';

function Nav() {
  return (
    <nav className="nav">
            <h1>Glamshades</h1>
            <div className="nav_links">
                <div className="nav_button">
                    <img src={Insight} alt=""/>
                    <Link className="nav_a" to="/Setting">Insights</Link>
                </div>
                <div className="nav_button">
                    <img src={People} alt=""/>
                    <Link className="nav_a" to="/Setting">Customer</Link>
                </div>
                <div className="nav_button">
                    <img src={Marketing} alt=""/>
                    <Link className="nav_a" to="/Setting">Promote</Link>
                </div>
                <div className="nav_button">
                    <img src={Shop} alt=""/>
                    <Link className="nav_a" to="/Setting">Shop</Link>
                </div>
                <div className="nav_button">
                    <img src={User} alt=""/>
                    <Link className="nav_a" to="/Profile">Profile</Link>
                </div>
                <div className="nav_line"></div>
                <div className="nav_buttom">
                    <div className="nav_button">
                        <img src={Question} alt=""/>
                        <Link className="nav_a" to="/Setting">Help</Link>
                    </div>
                    <div className="nav_button">
                        <img src={Logout} alt=""/>
                        <Link className="nav_a" to="/Setting">Sign out</Link>
                    </div>
                </div>

            </div>

        </nav>
  )
}

export default Nav