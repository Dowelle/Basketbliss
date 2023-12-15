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

  const merchantDetails = {merchantName, merchantTagline, merchantNumber, merchantAddress, merchantEmail, merchantFacebookLink, merchantInstagramLink, merchantTiktokLink, merchantPageLink}
  const setMerchantDetails = {setMerchantName, setMerchantTagline, setMerchantNumber, setMerchantAddress, setMerchantEmail, setMerchantFacebookLink, setMerchantInstagramLink, setMerchantTiktokLink, setMerchantPageLink}

  useEffect(() => {
    const merchantId = sessionStorage.uid;

    console.log(getAllMerchants());

    if(merchantId) {
      getMerchantDetails(merchantId).then(data => {
      console.log(data);

        if(data) {
            console.log('test');
            setMerchantName(data.merchantName.stringValue)
            setMerchantTagline(data.merchantTagline.stringValue)
            setMerchantNumber(data.merchantNumber.stringValue)
            setMerchantAddress(data.merchantAddress.stringValue)
            setMerchantEmail(data.merchantEmail.stringValue)
            setMerchantFacebookLink(data.merchantFacebookLink.stringValue)
            setMerchantInstagramLink(data.merchantInstagramLink.stringValue)
            setMerchantTiktokLink(data.merchantTiktokLink.stringValue)
            setMerchantPageLink(data.merchantName.stringValue)
        }
    })
    }

}, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingTwo setMerchantDetails={setMerchantDetails}/>} />
          <Route path="/Landing" element={<Landing />} />

          <Route path="/AddItem" element={ <AddItem/> }/>
          <Route path="/Cart" element={ <Cart/> }/>
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/Login" element={<Registration/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path={merchantPageLink ? '/' + merchantPageLink : '/HomePage'} element={<HomepageTwo merchantDetails={merchantDetails}/>}/>
          <Route path="/UserView" element={<UserView/>} />
          <Route path="/ProductPage" element={<ProductPage/>} />
          <Route path="/EditProfile" element={<EditProfile/>} />
          <Route path="/Analytics" element={<Analytics/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;