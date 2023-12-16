import React from 'react'

import { getMerchantDetails, updateMerchantDetails } from '../services/firebaseActions'
import Nav from '../components/Nav'
import {Link} from 'react-router-dom'

function EditProfile({merchantDetails, setMerchantDetails}) {
  const handleMerchantNameChange = (e) => {
    setMerchantDetails.setMerchantName(e.target.value)
  }
  const handleMerchantTaglineChange = (e) => {
    setMerchantDetails.setMerchantTagline(e.target.value)
  }
  const handleMerchantNumberChange = (e) => {
    setMerchantDetails.setMerchantNumber(e.target.value)
  }
  const handleMerchantEmailChange = (e) => {
    setMerchantDetails.setMerchantEmail(e.target.value)
  }
  const handleMerchantFacebookLinkChange = (e) => {
    setMerchantDetails.setMerchantFacebookLink(e.target.value)
  }
  const handleMerchantInstagramLinkChange = (e) => {
    setMerchantDetails.setMerchantInstagramLink(e.target.value)
  }
  const handleMerchantTiktokLinkChange = (e) => {
    setMerchantDetails.setMerchantTiktokLink(e.target.value)
  }

  const submitMerchantDetails = () => {
    const merchantId = sessionStorage.uid;

    updateMerchantDetails(merchantDetails, merchantId).then(response => {
      if(response) {
        getMerchantDetails(merchantId).then(payload => {
          if(payload) { 
            console.log(payload)
            if(payload.merchantName.stringValue !== 'MerchantName') {
              console.log(`u`);
              setMerchantDetails.setMerchantPageLink(payload.merchantName.stringValue)
            }
            setMerchantDetails.setMerchantName(payload.merchantName.stringValue)
            setMerchantDetails.setMerchantTagline(payload.merchantTagline.stringValue)
            setMerchantDetails.setMerchantNumber(payload.merchantNumber.stringValue)
            setMerchantDetails.setMerchantEmail(payload.merchantEmail.stringValue)
            setMerchantDetails.setMerchantFacebookLink(payload.merchantFacebookLink.stringValue)
            setMerchantDetails.setMerchantInstagramLink(payload.merchantInstagramLink.stringValue)
            setMerchantDetails.setMerchantTiktokLink(payload.merchantTiktokLink.stringValue)
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
        <Link to={'/' + merchantDetails.merchantPageLink}>gO Back</Link>
        
    </div>
  )
}

export default EditProfile
