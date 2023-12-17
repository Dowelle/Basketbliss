import React from 'react'

import { getMerchantDetails, updateMerchantDetails } from '../services/firebaseActions'
import Nav from '../components/Nav'
import {Link} from 'react-router-dom'

function EditProfile({merchantDetails, setCertainState}) {
  const handleMerchantNameChange = (e) => {
    setCertainState('MerchantName', e.target.value)
  }
  const handleMerchantTaglineChange = (e) => {
    setCertainState('MerchantTagline', e.target.value)
  }
  const handleMerchantNumberChange = (e) => {
    setCertainState('MerchantNumber', e.target.value)
  }
  const handleMerchantEmailChange = (e) => {
    setCertainState('MerchantEmail', e.target.value)
  }
  const handleMerchantFacebookLinkChange = (e) => {
    setCertainState('MerchantFacebookLink', e.target.value)
  }
  const handleMerchantInstagramLinkChange = (e) => {
    setCertainState('MerchantInstagramLink', e.target.value)
  }
  const handleMerchantTiktokLinkChange = (e) => {
    setCertainState('MerchantTiktokLink', e.target.value)
  }

  const submitMerchantDetails = () => {
    const merchantId = sessionStorage.uid;

    console.log(Object.entries(merchantDetails));
    const modifiedMerchantDetails = {}

    Object.entries(merchantDetails).forEach(key => {
      const newKey = key[0].charAt(8).toLowerCase() + key[0].slice(9)
      modifiedMerchantDetails[`${newKey}`] = key[1]
    });

    console.log(modifiedMerchantDetails);

    console.log(modifiedMerchantDetails)

    updateMerchantDetails(modifiedMerchantDetails, merchantId).then(response => {
      if(response) {
        getMerchantDetails(merchantId).then(res => {
          if(res) {
            const {address, email, facebookLink, instagramLink, name, number, pageLink, tagline, tiktokLink} = res.merchantDetails

            setCertainState('MerchantAddress', address);
            setCertainState('MerchantEmail', email);
            setCertainState('MerchantFacebookLink', facebookLink);
            setCertainState('MerchantName', name);
            setCertainState('MerchantNumber', number);
            setCertainState('MerchantPageLink', pageLink)
            setCertainState('MerchantTagline', tagline);
            setCertainState('MerchantTiktokLink', tiktokLink);
            setCertainState('MerchantInstagramLink', instagramLink);
          }
        })
      }
    })
  }

  return (
    <div className="Edit-profile">
      <Nav/>



        <h1>Business Details</h1>
        <input type="text" placeholder="Enter your merchant name" value={merchantDetails.merchantName} onChange={handleMerchantNameChange}/>
        <input type="text" placeholder="Enter your comapny's Tagline" value={merchantDetails.merchantTagline} onChange={handleMerchantTaglineChange}/>
        <input type="number" placeholder="Enter your company's contact number" value={merchantDetails.merchantNumber} onChange={handleMerchantNumberChange}/>
        <input type="email" placeholder="Enter your company's email address" value={merchantDetails.merchantEmail} onChange={handleMerchantEmailChange}/>

        <h1>Socials</h1>
        <input type="text" placeholder="Enter your company's Facebook link" value={merchantDetails.merchantFacebookLink} onChange={handleMerchantFacebookLinkChange}/>
        <input type="text" placeholder="Enter your company's Instagram link" value={merchantDetails.merchantInstagramLink} onChange={handleMerchantInstagramLinkChange}/>
        <input type="text" placeholder="Enter your company's Tiktok link" value={merchantDetails.merchantTiktokLink} onChange={handleMerchantTiktokLinkChange}/>

        <button onClick={submitMerchantDetails}>Save</button>
        <Link to={'/' + merchantDetails.merchantName}>gO Back</Link>
        
    </div>
  )
}

export default EditProfile
