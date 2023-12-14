import './App.css';
import './services/firebase'

import { useState } from 'react'
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
  const [businessName, setBusinessName] = useState('')
  // const [merchantName, setMerchantName] = useState('')
  // const [merchantName, setMerchantName] = useState('')


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingTwo />} />
          <Route path="/Landing" element={<Landing />} />

          <Route path="/AddItem" element={ <AddItem/> }/>
          <Route path="/Cart" element={ <Cart/> }/>
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/Login" element={<Registration/>} />
          <Route path="/Profile" element={<Profile businessName={businessName} setBusinessName={setBusinessName}/>} />
          {/* <Route path="/Homepage" element={<Homepage businessName={businessName} setBusinessName={setBusinessName}/>} /> */}
          <Route path="/HomePage" element={<HomepageTwo/>}/>
          <Route path="/UserView" element={<UserView businessName={businessName} setBusinessName={setBusinessName}/>} />
          <Route path="/ProductPage" element={<ProductPage/>} />
          <Route path="/EditProfile" element={<EditProfile/>} />
          <Route path="/Analytics" element={<Analytics/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;