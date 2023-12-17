
import {useState, useEffect}from 'react';
import{ Link, useNavigate } from 'react-router-dom';
import './HomepageTwo.css';

import Order from '../assets/cart.png'
import Cart from '../assets/order.png'

import Out from '../assets/out.png'

import ProductCard from '../components/ProductCard';
import Nav from '../components/Nav'
import Footer from '../components/Footer';
import {getMerchantDetails, signOutUser} from '../services/firebaseActions'

function HomepageTwo({setCertainState, merchantDetails}) {

  const [isAlreadyUser, setIsAlreadyUser] = useState(false)
  const [popupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const [signupPopupVisible, setSignupPopupVisible] = useState(false);
  const [loginPopupVisible, setLoginPopupVisible] = useState(false);

  const openSignupPopup = () => {
    setSignupPopupVisible(true);
  };


  const openSignup = () => {
    setSignupPopupVisible(true);
    setLoginPopupVisible(false); 
  };

  const openLogin = () => {
    setLoginPopupVisible(true);
    setSignupPopupVisible(false); 
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSignupPopupVisible(false);
    setLoginPopupVisible(false);
  };
  

  const [products, setProducts] = useState([])

  const navigate = useNavigate()

  const signOutMerchant = () => {
            signOutUser().then((res) => {
                if(res) {
                  setCertainState('MerchantAddress', '');
                  setCertainState('MerchantEmail', '');
                  setCertainState('MerchantFacebookLink', '');
                  setCertainState('MerchantInstagramLink', '');
                  setCertainState('MerchantName', '');
                  setCertainState('MerchantNumber', '');
                  setCertainState('MerchantPageLink', null)
                  setCertainState('MerchantTagline', '');
                  setCertainState('MerchantTiktokLink', '');
                    navigate('/')
                }
            })
        }

  // useEffect(() => {
  //   const merchantId = sessionStorage.uid;

  //   getMerchantDetails(merchantId).then((res) => {
  //     console.log(res)
  //     if(res) {
  //       if(res.products){
  //         console.log(Object.entries(res.products.mapValue.fields.productName.mapValue.fields))

  //       }
  //     }
  //   })
  // }, [])

  return (
    <div className="HomepageTwo">
        {/* <div className="intro">
            <h1>Glamshades</h1>
            <p>Glamorous Shades of Liptints</p>
        </div> */}
        <Nav/>

        <section className="product-section">
        <div className="top-bar">
          <h1>{merchantDetails.merchantName}</h1>

          {isAlreadyUser ? (
            <div className="top-bar-links">
              <input placeholder="Search items..." />
              <Link className="link-container">
                My cart<img src={Order} alt="Order Icon" />
              </Link>
              <Link className="link-container">
                My order<img src={Cart} alt="Cart Icon" />
              </Link>
              <button className="link-container" onClick={signOutMerchant}>
                Sign out <img src={Out} alt="Sign Out Icon" />
              </button>
            </div>
          ) : (
            <div className="userAuth">
            <button onClick={openLogin}>Log in</button>
            <button onClick={openSignup}>Sign up</button>
            {popupVisible && (
              <div className="popup-container">
                <div className="popup">
                  <button className="close-button" onClick={closePopup}>
                    X
                  </button>
                  {/* Common Popup Content */}
                  <h1>Common Popup Content</h1>
                </div>
              </div>
            )}

            {signupPopupVisible && (
              <div className="popup-container">
                <div className="popup">
                  <button className="close-button" onClick={closePopup}>
                    X
                  </button>
                  {/* Signup Popup Content */}
                  <h1>Sign up</h1>
                  <input placeholder="Enter your email" type="email" />
                  <input required placeholder="Enter your password" type="password" />
                  <input placeholder="Confirm your password" type="password" />
                  <button>Submit</button>
                </div>
              </div>
            )}

            {loginPopupVisible && (
              <div className="popup-container">
                <div className="popup">
                  <button className="close-button" onClick={closePopup}>
                    X
                  </button>
                  {/* Login Popup Content */}
                  <h1>Login</h1>
                  <input placeholder="Enter your email" type="email" />
                  <input required placeholder="Enter your password" type="password" />
                  <button>Submit</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>


          <div className="product-section">
            <div className="sort">
              <h1>My products</h1>
              <div className="sort-buttons">
                <button>All</button>
                <button>Popular</button>
                <button>Lowest</button>
                <button>Highest</button>
              </div>
            </div>
            <div className="product-container">
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
            </div>
          </div>
        </section>
        <Footer merchantDetails={merchantDetails}/>
        
        <div>
          test
        </div>
        {/* <Footer merchantDetails={merchantDetails}/>
        
        <div>
          test
        </div> */}
    </div>
  )
}

export default HomepageTwo
