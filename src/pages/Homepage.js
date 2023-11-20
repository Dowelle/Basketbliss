import './Homepage.css';
import React from 'react';

import {Link} from 'react-router-dom';


import Setting from '../assets/settings.png';
import Logout from '../assets/logout.png';
import Shop from '../assets/shop.png';
import Insight from '../assets/insight.png';
import Marketing from '../assets/marketing.png';
import People from '../assets/people.png';
import Question from '../assets/question.png';
import Monitor from '../assets/monitor.png';

function Homepage() {
  return (
    <div className="Homepage">
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
                    <img src={Setting} alt=""/>
                    <Link className="nav_a" to="/Setting">Settings</Link>
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
        <div className="main-content">

        </div>
        <div className="stats">
            <div class="stats_title">
                <h1>Statistics</h1>
                <img src={Monitor} alt="" />
            </div>
            <div className="stats_web">
                
                <div className="count">
                    <h3>Unique visitors</h3>
                    <p>143</p>
                </div>
                <div className="count">
                    <h3>Page views</h3>
                    <p>420</p>
                </div>
                <div className="count">
                    <h3>Bounce rate</h3>
                    <p>69%</p>
                </div>
                <div className="count">
                    <h3>Avg. session duration</h3>
                    <p>4:20 mins</p>
                </div>
  
            </div>
        </div>
    </div>
  )
}

export default Homepage