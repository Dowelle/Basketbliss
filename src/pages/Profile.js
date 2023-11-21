import { useEffect, useState } from 'react';
import Nav from '../components/Nav';

import { updateMerchantDetails, getMerchantDetails } from '../services/firebaseActions';

import './Homepage.css';
import './Profile.css'

function Profile() {
    const [businessName, setBusinessName] = useState('')
    const [businessTagline, setBusinessTagline] = useState('')
    const [businessPhoneNumber, setBusinessPhoneNumber] = useState('')
    const [businessEmail, setBusinessEmail] = useState('')
    const [businessAddress, setBusinessAddress] = useState('')

    useEffect(() => {
        const merchantId = sessionStorage.uid;

        getMerchantDetails(merchantId).then(data => {
            console.log(data)
            setBusinessName(data.businessName.stringValue)
            setBusinessTagline(data.businessTagline.stringValue)
            setBusinessPhoneNumber(data.businessPhoneNumber.stringValue)
            setBusinessEmail(data.businessEmail.stringValue)
            setBusinessAddress(data.businessAddress.stringValue)
        })
    }, [])

    const handleBusinessNameChange = (e) => {
        setBusinessName(e.target.value)
    }
    const handleBusinessTaglineChange = (e) => {
        setBusinessTagline(e.target.value)
    }
    const handleBusinessPhoneNumberChange = (e) => {
        setBusinessPhoneNumber(e.target.value)
    }
    const handleBusinessEmailChange = (e) => {
        setBusinessEmail(e.target.value)
    }
    const handleBusinessAddressChange = (e) => {
        setBusinessAddress(e.target.value)
    }

    const submitMerchantDetails = () => {
        const merchantId = sessionStorage.uid;
        updateMerchantDetails({businessName, businessTagline, businessEmail, businessPhoneNumber, businessAddress}, merchantId);
    }
    
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
                        <input type="text" value={businessName} onChange={handleBusinessNameChange}/>
                    </div>
                    <div className="input_detail">
                        <p>Business Tagline</p>
                        <input type="text" value={businessTagline} onChange={handleBusinessTaglineChange}/>
                    </div>
                </div>

                <div className="input_row">
                    <div className="input_detail">
                        <p>Phone Number</p>
                        <input type="text" value={businessPhoneNumber} onChange={handleBusinessPhoneNumberChange}/>
                    </div>
                    <div className="input_detail">
                        <p>Email Adress</p>
                        <input type="text" value={businessEmail} onChange={handleBusinessEmailChange}/>
                    </div>
                </div>

                <div className="input_row">
                    <div className="input_detail">
                        <p>Business Address</p>
                        <input type="text" value={businessAddress} onChange={handleBusinessAddressChange}/>
                    </div>
                    <div className="input_detail">
                        <p>Cover Photo</p>
                        <input type="file"/>
                    </div>
                    
                </div>
                <button onClick={submitMerchantDetails}>Save</button>
            </div>
        </div>
    </div>
  )
}

export default Profile