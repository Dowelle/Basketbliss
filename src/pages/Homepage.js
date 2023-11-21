import './Homepage.css';
import React from 'react';

import {Link} from 'react-router-dom';

import Logout from '../assets/logout.png';
import Shop from '../assets/shop.png';
import Insight from '../assets/insight.png';
import Marketing from '../assets/marketing.png';
import People from '../assets/people.png';
import Question from '../assets/question.png';
import Monitor from '../assets/monitor.png';
import User from '../assets/user.png';
import Order from '../assets/order.png';
import Notification from '../assets/notification.png';
import Shoes from '../assets/shoes-nobg.png';
import Pants from '../assets/pants-nobg.png';
import Jacket from '../assets/jacket-nobg.png';
import Dress from '../assets/dress-nobg.png';

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
                    <img src={User} alt=""/>
                    <Link className="nav_a" to="/Setting">Profile</Link>
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
            <div className="link_container">
                <h1>Glamshades</h1>
                <p className="link">https://fictional-spoon-p9j5r5vpqq9c6567.github.dev/</p>
            </div>
            <div className="main-top">
                <input type="text" placeholder="Search items..."/>
                <img className="notif" src={Notification} alt="" />
            </div>

            <div className="featured_products">
                <img src={Jacket} />
                <img src={Shoes} />
                <img src={Dress} />
                <img src={Pants} />
            </div>
        </div>
        <div className="stats">
            <div>
                <div class="stats_title">
                    <h1>Web Analytics</h1>
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
            <div>
            <div class="stats_title">
                    <h1>Orders Fullfillment</h1>
                    <img src={Order} alt="" />
                </div>
                <div className="stats_web">
                    
                    <div className="count">
                        <h3>Pending orders</h3>
                        <p>143</p>
                    </div>
                    <div className="count">
                        <h3>Order processing</h3>
                        <p>420</p>
                    </div>
                    <div className="count">
                        <h3>Returns & Exchange</h3>
                        <p>69%</p>
                    </div>
                    <div className="count">
                        <h3>Avg. session duration</h3>
                        <p>4:20 mins</p>
                    </div>
    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Homepage