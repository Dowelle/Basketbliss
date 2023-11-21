import React from 'react';
import Nav from '../components/Nav';
import './Homepage.css';
import './Profile.css'

function Profile() {
  return (
    <div className="Profile">
        <Nav/>
        <div className="form">
            <div className="input_left">
                <h1>.</h1>
            </div>
            <div className="input_right">
                <h1>Update Company Details: </h1>
                <div className="input_row">
                    <div className="input_detail">
                        <p>Business name</p>
                        <input type="text"/>
                    </div>
                    <div className="input_detail">
                        <p>Business Tagline</p>
                        <input type="text"/>
                    </div>
                </div>

                <div className="input_row">
                    <div className="input_detail">
                        <p>Phone Number</p>
                        <input type="text"/>
                    </div>
                    <div className="input_detail">
                        <p>Email Adress</p>
                        <input type="text"/>
                    </div>
                </div>

                <div className="input_row">
                    <div className="input_detail">
                        <p>Business Address</p>
                        <input type="text"/>
                    </div>
                    <div className="input_detail">
                        <p>Cover Photo</p>
                        <input type="file"/>
                    </div>
                    
                </div>
                <button>Save</button>
            </div>
        </div>
    </div>
  )
}

export default Profile