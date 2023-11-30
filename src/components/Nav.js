// import {useState, useEffect} from 'react'
// import { useNavigate } from 'react-router-dom';
// import {Link } from 'react-router-dom';

// import { getMerchantDetails, signOutUser } from '../services/firebaseActions';

// import '../pages/Homepage.css';

// import User from '../assets/user.png';
// import Logout from '../assets/logout.png';
// import Shop from '../assets/shop.png';
// import Insight from '../assets/insight.png';
// import Marketing from '../assets/marketing.png';
// import People from '../assets/people.png';
// import Question from '../assets/question.png';

// function Nav(props) {
//     const {businessName, setBusinessName} = props

//     const navigate = useNavigate()

//     useEffect(() => {
//         const merchantId = sessionStorage.uid;

//         getMerchantDetails(merchantId).then(data => {
//             console.log(data)
//             if(data) {
//                 setBusinessName(data.businessName.stringValue)

//             }
//         })
//     }, [])

//     const signOutMerchant = () => {

//         signOutUser().then((res) => {
//             if(res) {
//                 navigate('/')
//             }
//         })
//     }
//   return (
//     <nav className="nav">
//             <h1>{businessName || 'Glamshades'}</h1>
//             <div className="nav_links">
//                 <div className="nav_button">
//                     <img src={Insight} alt=""/>
//                     <Link className="nav_a" to="/Setting">Insights</Link>
//                 </div>
//                 <div className="nav_button">
//                     <img src={People} alt=""/>
//                     <Link className="nav_a" to="/Setting">Customer</Link>
//                 </div>
//                 <div className="nav_button">
//                     <img src={Marketing} alt=""/>
//                     <Link className="nav_a" to="/Setting">Promote</Link>
//                 </div>
//                 <div className="nav_button">
//                     <img src={Shop} alt=""/>
//                     <Link className="nav_a" to="/Homepage">Shop</Link>
//                 </div>
//                 <div className="nav_button">
//                     <img src={User} alt=""/>
//                     <Link className="nav_a" to="/Profile">Profile</Link>
//                 </div>
//                 <div className="nav_line"></div>
//                 <div className="nav_buttom">
//                     <div className="nav_button">
//                         <img src={Question} alt=""/>
//                         <Link className="nav_a" to="/Setting">Help</Link>
//                     </div>
//                     <div className="nav_button">
//                         <img src={Logout} alt=""/>
//                         <button className="nav_a" onClick={signOutMerchant}>Sign out</button>
//                     </div>
//                 </div>

//             </div>

//         </nav>
//   )
// }

// export default Nav