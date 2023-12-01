import React from 'react';
import './AddItem.css';
import Dress1 from '../assets/dress1.jpg'

import Footer from '../components/Footer';

function AddItem() {
  return (
    <div className="additem">
      <h1>ADMIN PANEL</h1>
      <div className="main-container">
        <div className="additem-left">
          <h2>Post a Product:</h2>
          <div className="name-stocks">
            <div className="detail-container">
              <label>Product name:</label>
              <input type="text"  />
            </div>

            <div className="detail-container">
              <label>Product stock:</label>
              <input type="number"  />
            </div>
            <div className="textarea">
              <label>Product Description:</label>
              <textarea></textarea>
            </div>

          </div>
        </div>
        <div className="additem-right">
          <img className="image-main" src={ Dress1 }/>
          <div className="images-below">
            <img src={ Dress1 }/>
            <img src={ Dress1 }/>
            <img src={ Dress1 }/>
          </div>
        </div>
      </div>
    





      {/* <h1>ADMIN PANEL</h1>
      <div className="main-additems">
        <div className="per-label">
          <div >
            <label for="prod-name">Product Name:</label>
            <input id="prod-name" type="text" />
          </div>
          <div>
            <label for="prod-stock">Number of stocks:</label>
            <input id="prod-stock" type="number" />
          </div>
          <div>
            <label for="prod-name">Product Description:</label>
            <textarea id="prod-name"></textarea>
          </div>
        </div>
        <div className="images-container">
          <img className="image-main" src={ Dress1 }/>
          <div className="images-bottom">
            <img src={ Dress1 }/>
            <img src={ Dress1 }/>
            <img src={ Dress1 }/>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default AddItem
