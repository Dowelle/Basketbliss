import './App.css';
import './services/firebase'

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Checkout from './pages/Checkout'
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
import UserHomepage from './pages/UserHomepage';
import CartTwo from './pages/CartTwo';

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
  const [merchantProducts, setMerchantProducts] = useState([])

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

    

    getAllMerchants(merchantId).then(collection => {
      const tempMerchants = []

      collection.forEach(document => {
        tempMerchants.push(document.data())
      })

      setMerchants(tempMerchants)
    })

    if(merchantId) {
      getMerchantDetails(merchantId).then(data => {
        if(data) {
            const {address, email, facebookLink, instagramLink, name, number, pageLink, tagline, tiktokLink} = data.merchantDetails
            
            setMerchantName(name)
            setMerchantTagline(tagline)
            setMerchantNumber(number)
            setMerchantAddress(address)
            setMerchantEmail(email)
            setMerchantFacebookLink(facebookLink)
            setMerchantInstagramLink(instagramLink)
            setMerchantTiktokLink(tiktokLink)
            setMerchantPageLink(name)

            setMerchantProducts(data.products)
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
          <Route path={merchantPageLink ? '/' + merchantPageLink + '/AddItem': undefined} element={ <AddItem/> }/>
          {/* <Route path="/Cart" element={ <Cart/> }/> */}
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/Login" element={<Registration/>} />
          <Route path={"/Profile"} element={<Profile/>} />
          <Route path={merchantPageLink ? '/' + merchantPageLink : undefined} element={<HomepageTwo setCertainState={setCertainState} merchantDetails={merchantDetails} />}/>
          {
            merchants ? merchants.filter(merchant => merchant.merchantDetails.pageLink !== undefined).map(merchant => (
              <Route
                key={merchant.merchantDetails.pageLink} // Add a unique key for each route
                path={`/stores/${merchant.merchantDetails.pageLink}`}
                element={<UserHomepage merchantProducts={merchant.products} merchantDetails={merchant.merchantDetails} />}
              />
            ))
            : null // Handle the case when merchants is falsy (e.g., not yet loaded)
          }
          {
            merchants ? merchants.filter(merchant => merchant.merchantDetails.pageLink !== undefined).map(merchant => (
              merchant.products?.map(product => (
                <Route
                  key={product.productName} // Add a unique key for each route
                  path={`/stores/${merchant.merchantDetails.pageLink}/${product.productName}`}
                  element={<ProductPage merchantName={merchant.merchantDetails.name} product={product} />}
                />
              ))
            ))
            : null // Handle the case when merchants is falsy (e.g., not yet loaded)
          }
          <Route path={merchantPageLink ? '/' + merchantPageLink + '/EditProfile' : undefined} element={<EditProfile setCertainState={setCertainState} merchantDetails={merchantDetails}/>} />
          <Route path={merchantPageLink ? '/' + merchantPageLink + '/Analytics': undefined} element={<Analytics merchantDetails={merchantDetails} />} />
          <Route path="/MyOrderUser" element={<MyOrderUser/>} />
          <Route path="/Checkout" element={<Checkout/>} />
          <Route path='/Cart' element={<CartTwo/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;