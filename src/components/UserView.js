import React from 'react'
import '../pages/Homepage.css';
import {Link} from 'react-router-dom';

import Logout from '../assets/logout.png';
import Shop from '../assets/shop.png';
import Insight from '../assets/insight.png';
import Marketing from '../assets/marketing.png';
import People from '../assets/people.png';
import Question from '../assets/question.png';
import Monitor from '../assets/monitor.png';

import Order from '../assets/order.png';
import Notification from '../assets/notification.png';
import Shoes from '../assets/shoes-nobg.png';
import Pants from '../assets/pants-nobg.png';
import Jacket from '../assets/jacket-nobg.png';
import Dress from '../assets/dress-nobg.png';

function UserView(props) {
const {businessName, setBusinessName} = props
  return (
    <div className="main-content">
            <div className="link_container">
                <h1>{businessName}</h1>
                <Link className="link" to="/UserView">https://fictional-spoon-p9j5r5vpqq9c6567.github.dev/</Link>
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
  )
}

export default UserView