import React,{useState} from 'react'
import './LandingTwo.css'

import LandingPic from '../assets/landing-left.svg'
import Plant from '../assets/plant.svg'
import Plant2 from '../assets/plant2.svg'

function LandingTwo() {
  const [isCreate, setCreate] =useState(true);
  const handleClickCreate = () => {
    setCreate(!isCreate);
  };
  return (
    <div className="LandingTwo">
        <div className="title_container">
            <h1>BASKETBLISS</h1>
            <div className="inputs">
              <input placeholder='Enter your email' type="email"/>
              <input placeholder='Enter your password' type="password"/>
              <button>Submit</button>
            </div>
        </div>
        <div className="LandingMiddle">
          <img src={LandingPic} alt="" />
          <div className="LandingMiddle_inner">
            <h1>Your<span>Shop</span>, Your <span>Rules</span>:<br/>Craft Your Online Storefront</h1>
            <div className="LandingLine"></div>
            <p>Your passion, your products, your success. Take control of your<br/> 
online retail journey and build your brand the way you envision it.</p>
            <div className = {isCreate ? "create" : "notCreate"} onClick={handleClickCreate}>
              Create account
              {!isCreate && (
                <div className="create-account">
                  <h1>Create</h1>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          
        </div>
        <img className="plant" src={Plant} alt="" />
        <img className="plant2" src={Plant2} alt="" />
    </div>
  )
}

export default LandingTwo