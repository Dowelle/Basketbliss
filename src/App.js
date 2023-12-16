import './App.css';
import './services/firebase'


import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Cart from './pages/Cart'
import Landing from './pages/Landing';
import Signin from './pages/Signin';
import Registration from './pages/Registration';
import HomepageTwo from './pages/HomepageTwo';
// import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import UserView from './components/UserView';
import LandingTwo from './pages/LandingTwo';
import ProductPage from './pages/ProductPage';
import EditProfile from './pages/EditProfile';
import AddItem from './pages/AddItem';
import Analytics from './pages/Analytics';
import MyOrderUser from './pages/MyOrdersUser';

import { getAllMerchants, getMerchantDetails } from './services/firebaseActions';

function App() {
  const [merchantName, setMerchantName] = useState('MerchantName')
  const [merchantTagline, setMerchantTagline] = useState('Honesty is the best policy')
  const [merchantNumber, setMerchantNumber] = useState('09999999999')
  const [merchantAddress, setMerchantAddress] = useState('Area 51, Las Vegas, NV')
  const [merchantEmail, setMerchantEmail] = useState('merchantname@gmail.com')
  const [merchantFacebookLink, setMerchantFacebookLink] = useState('johnraygloria')
  const [merchantInstagramLink, setMerchantInstagramLink] = useState('johnraygloria')
  const [merchantTiktokLink, setMerchantTiktokLink] = useState('johnraygloria')
  const [merchantPageLink, setMerchantPageLink] = useState(null)
  const [merchants, setMerchants] = useState([])

  console.log(merchantPageLink);

  const setCertainState = (state, data) => {
    switch(state){
      case 'MerchantName':
        setMerchantName(data);
        break;
      case 'MerchantTagline':
        setMerchantTagline(data);
        break;
      case 'MerchantNumber':
        setMerchantNumber(data);
        break;
      case 'MerchantAddress':
        setMerchantAddress(data);
        break;
      case 'MerchantEmail':
        setMerchantEmail(data);
        break;
      case 'MerchantFacebookLink':
        setMerchantFacebookLink(data);
        break;
      case 'MerchantInstagramLink':
        setMerchantInstagramLink(data);
        break;
      case 'MerchantTiktokLink':
        setMerchantTiktokLink(data);
        break;
      case 'MerchantPageLink':
        setMerchantPageLink(data);
        break;
      default:
        console.log('Unknown State Case')
    }
  }

  const merchantDetails = {merchantName, merchantTagline, merchantNumber, merchantAddress, merchantEmail, merchantFacebookLink, merchantInstagramLink, merchantTiktokLink, merchantPageLink}

  useEffect(() => {
    const merchantId = sessionStorage.uid;

    if(merchantId) {
      getMerchantDetails(merchantId).then(data => {
        if(data) {
            const {address, email, facebookLink, instagramLink, name, number, pageLink, tagline, tiktokLink} = data.merchantDetails.mapValue.fields
            
            setMerchantName(name.stringValue)
            setMerchantTagline(tagline.stringValue)
            setMerchantNumber(number.stringValue)
            setMerchantAddress(address.stringValue)
            setMerchantEmail(email.stringValue)
            setMerchantFacebookLink(facebookLink.stringValue)
            setMerchantInstagramLink(instagramLink.stringValue)
            setMerchantTiktokLink(tiktokLink.stringValue)
            setMerchantPageLink(name.stringValue)
        }
      })
    }

}, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingTwo setCertainState={setCertainState} merchantDetails={merchantDetails}/>} />
          <Route path="/Landing" element={<Landing />} />

          <Route path="/AddItem" element={ <AddItem/> }/>
          <Route path="/Cart" element={ <Cart/> }/>
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/Login" element={<Registration/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path={merchantPageLink ? '/' + merchantPageLink : '/HomePage'} element={<HomepageTwo setCertainState={setCertainState} merchantDetails={merchantDetails}/>}/>
          <Route path="/UserView" element={<UserView/>} />
          <Route path="/ProductPage" element={<ProductPage/>} />
          <Route path="/EditProfile" element={<EditProfile/>} />
          <Route path="/Analytics" element={<Analytics/>} />
          <Route path="/MyOrderUser" element={<MyOrderUser/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;