import React from 'react'
import {Link, useNavigate} from 'react-router-dom';

import { signOutUser } from '../services/firebaseActions'

import '../pages/HomepageTwo.css'
import analytics from '../assets/analysis.png'

function Nav({setCertainState, merchantDetails}) {
  const navigate = useNavigate()
  const signOutMerchant = () => {
    signOutUser().then((res) => {
        if(res) {
          setCertainState('MerchantAddress', '');
          setCertainState('MerchantEmail', '');
          setCertainState('MerchantFacebookLink', '');
          setCertainState('MerchantInstagramLink', '');
          setCertainState('MerchantName', '');
          setCertainState('MerchantNumber', '');
          setCertainState('MerchantPageLink', null)
          setCertainState('MerchantTagline', '');
          setCertainState('MerchantTiktokLink', '');
            navigate('/')
        }
    })
}
  return (
    <nav>
         <Link className="nav-button" to={merchantDetails ? '/' + merchantDetails.merchantPageLink + '/Analytics': undefined}>
          <img src={ analytics }/>
              Analytics
          </Link>

          <Link className="nav-button" to={merchantDetails ? '/' + merchantDetails.merchantPageLink + '/AddItem': undefined}>
          <img src={ analytics }/>
              Items
          </Link>

          <Link to={merchantDetails ? '/' + merchantDetails.merchantPageLink + '/EditProfile': undefined} className="nav-button">
          <img src={ analytics }/>
              Edit Profile
          </Link>

          <Link className="nav-button">
          <img src={ analytics } onClick={signOutMerchant}/>
            Log Out
          </Link>
    </nav>
  )
}

export default Nav
