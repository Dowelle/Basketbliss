import React from 'react';
import './EditProfile.css';

import Nav from '../components/Nav';


import plant from '../assets/plant.svg'
import plant2 from '../assets/plant2.svg'

function EditProduct() {


  return (
    <div className="Edit-profile">
      <Nav/>
      <div className='edit-top'>
        <div className="inner-top">
            <h1>Edit Product Details:</h1>
            <input type="text" placeholder="Enter your product's" />
            <input type="number" placeholder="Enter your product's price" />
            <input type="number" placeholder="Enter your available stocks" />
            <textarea className="product-textarea" placeholder='Enter your products description'></textarea>
            <div className="edit-variety-container">
                <div className="specific-variety">
                    <h3>Small</h3>
                    <button>Delete</button>
                </div>

                <div className="specific-variety">
                    <h3>Small</h3>
                    <button>Delete</button>
                </div>
            </div>
            <div style={{
              display:"flex",
              gap:"1rem"
            }}>
                <button className="saveprofile">Save</button>
                <button style={{
                  backgroundColor:"#940000",
                  color:"#fff",
                  padding:".5rem 1rem"
                }}>Remove Item</button>
            </div>
        </div>
      </div>


      <div className="edit-bottom">
        <img className="plantOne" src={plant} />
        <img className="plantTwo" src={plant2} />

        {/* <img className="girl" src={ Profilepic} /> */}

      </div>
        
    </div>
  )
}

export default EditProduct
