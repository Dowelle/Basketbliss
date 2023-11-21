import './App.css';
import './services/firebase'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import Signin from './pages/Signin';
import Registration from './pages/Registration';
import Homepage from './pages/Homepage';
import Settings from './pages/Settings';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/Login" element={<Registration/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Homepage" element={<Homepage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
