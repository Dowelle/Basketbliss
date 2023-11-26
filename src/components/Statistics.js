import React from 'react';
import '../pages/Homepage.css';

import Monitor from '../assets/monitor.png';
import Order from '../assets/order.png';

function Statistics() {
  return (
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
  )
}

export default Statistics