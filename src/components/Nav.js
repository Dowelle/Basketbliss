import React from 'react'
import {Link} from 'react-router-dom';
import '../pages/HomepageTwo.css'
import analytics from '../assets/analysis.png'

function Nav() {
  return (
    <nav>
        <Link className="nav-button" to="/Analytics">
        <img src={ analytics }/>
            Analytics
        </Link>

        <Link className="nav-button" to='/AddItem'>
        <img src={ analytics }/>
            Items
        </Link>

        <Link to='/EditProfile' className="nav-button">
        <img src={ analytics }/>
            Edit Profile
        </Link>

        <Link className="nav-button">
        {/* <img src={ analytics } onClick={signOutMerchant}/> */}
        Log Out
        </Link>
    </nav>
  )
}

export default Nav
