import './Homepage.css';
import React from 'react';

import Statistics from '../components/Statistics';
import UserView from '../components/UserView';
import { useNavigate } from 'react-router-dom';

import {Link} from 'react-router-dom';

import { signOutUser } from '../services/firebaseActions';

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
import Add from '../assets/add.png';

import Nav from '../components/Nav';

function Homepage(props) {
    const {businessName, setBusinessName} = props
    

  return (
    <div className="Homepage">
        <Nav businessName={businessName} setBusinessName={setBusinessName}/>
        <UserView businessName={businessName} setBusinessName={setBusinessName}/>
        
        <Statistics  />
    </div>
  )
}

export default Homepage