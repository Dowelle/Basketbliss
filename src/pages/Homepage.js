import './Homepage.css';
import React from 'react';

import {Link} from 'react-router-dom';

import Setting from '../assets/settings.png';

function Homepage() {
  return (
    <div className="Homepage">
        <header>
        <nav>
            
            <ul>
                <h1>Glamshades</h1>
                <li><Link to="/Homepage">Home</Link></li>
                <li><Set to="/Homepage">Home</Set></li>
                <li><Link to="/Homepage">Home</Link></li>
                <li><Link to="/Homepage">Home</Link></li>
                <button href="" id="signOutButton"></button>
            </ul>
        </nav>
    </header>
    <main>
        <div id="main-body">
            <div class="link">Your page link: <a href="http://127.0.0.1:5501/pages/shop.html" target = "_blank">http://127.0.0.1:5501/pages/shop.html</a> </div>
            <div class="profile">
                
            </div>
        </div>
    </main>
        <div className="main-body">

        </div>
    </div>
  )
}

export default Homepage