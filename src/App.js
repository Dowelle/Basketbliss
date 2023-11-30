import './App.css';
import './services/firebase'

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import Signin from './pages/Signin';
import Registration from './pages/Registration';
import HomepageTwo from './pages/HomepageTwo';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import UserView from './components/UserView';
import LandingTwo from './pages/LandingTwo';
import ProductPage from './pages/ProductPage';

function App() {
  const [businessName, setBusinessName] = useState('')

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/LandingTwo" element={<LandingTwo />} />
          <Route path="/Landing" element={<Landing />} />

          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/Login" element={<Registration/>} />
          <Route path="/Profile" element={<Profile businessName={businessName} setBusinessName={setBusinessName}/>} />
          <Route path="/Homepage" element={<Homepage businessName={businessName} setBusinessName={setBusinessName}/>} />
          <Route path="/" element={<HomepageTwo/>}/>
          <Route path="/UserView" element={<UserView businessName={businessName} setBusinessName={setBusinessName}/>} />
          <Route path="/ProductPage" element={<ProductPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
