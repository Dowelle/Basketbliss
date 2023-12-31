import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

import { addPageVisits, addTotalUser, getImageUrl, logInUserWithEmailAndPassword, signOutUser, signUpUserWithEmailAndPassword } from "../services/firebaseActions";

import Order from '../assets/cart.png'
import Cart from '../assets/order.png'
import analytics from '../assets/analysis.png'
import Out from '../assets/out.png'
const UserHomepage = ({merchantProducts, merchantDetails}) => {
  
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

  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [signUpConfirmationPassword, setSignUpConfirmationPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const handleSignUpEmailChange = (e) => {
    setSignUpEmail(e.target.value)
  }
  const handleSignUpPasswordChange = (e) => {
    setSignUpPassword(e.target.value)
  }
  const handleSignUpConfirmationPasswordChange = (e) => {
    setSignUpConfirmationPassword(e.target.value)
  }

  const handleLoginEmailChange = (e) => {
    setLoginEmail(e.target.value)
  }
  const handleLoginPasswordChange = (e) => {
    setLoginPassword(e.target.value)
  }

  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const currentLink = window.location.href
    const currentRoute = currentLink.slice(currentLink.indexOf('dev') + 3)
    
    if(currentRoute === '/stores/' + merchantDetails.pageLink) {
      addPageVisits(merchantDetails.reference)
    }
  }, [window.location.href])

    useEffect(() => {
      if(sessionStorage.uid) {
        setIsAlreadyUser(true)
      }
    })

    useEffect(() => {
        const fetchData = async () => {
          if (merchantProducts) {
            try {
              const updatedProducts = await Promise.all(merchantProducts.map(async (merchantProduct) => {
                if (merchantProduct) {
                  const urls = await getImageUrl(merchantProduct);
                  merchantProduct.pictures = urls;
                  return merchantProduct;
                }
              }));
      
              setProducts(updatedProducts);
            } catch (error) {
              // Handle errors
              console.error("Error updating products:", error);
            }
          }
        };
      
        fetchData(); // Invoke the asynchronous function immediately
      
      }, [merchantProducts]);
      
      const signUpUser = () => {
        if(signUpConfirmationPassword !== signUpPassword) {
          return;
        }

        console.log(merchantDetails)
        
        const merchantName = merchantDetails.reference

        signUpUserWithEmailAndPassword(signUpEmail, signUpPassword, merchantName).then((response) => {
          console.log(response);
          if(response.uid) {
            setIsAlreadyUser(true)
          }

          addTotalUser(merchantDetails.reference)
    
          if(!response.errorCode) {
            return;
          }
        })
      }

      const logInUser = () => {
        const merchantName = merchantDetails.reference

        logInUserWithEmailAndPassword(loginEmail, loginPassword, merchantName).then(response => {
          if(response.uid) {
            setIsAlreadyUser(true)
          }

          
          if(!response.errorCode) {
            // navigate('/' + merchantDetails.merchantPageLink);
            return;
          }
          
        })
      }

      const signOut = () => {
        signOutUser().then((res) => {
            if(res) {
              setIsAlreadyUser(false)
            }
        })
    }
    return (
        <div className="HomepageTwo">
            <section className="product-section">
              <div className="top-bar">
                <h1>{merchantDetails.name}</h1>
                {isAlreadyUser ? (
            <div className="top-bar-links">
              <input placeholder="Search items..." />
              <Link className="link-container" to={window.location.href + '/Cart'}>
                My cart<img src={Order} alt="Order Icon" />
              </Link>
              <Link className="link-container" to={window.location.href + '/MyOrderUser'}>
                My order<img src={Cart} alt="Cart Icon" />
              </Link>
              <button onClick={signOut} className="link-container">
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
                  <input placeholder="Enter your email" type="email" value={signUpEmail} onChange={handleSignUpEmailChange}/>
                  <input required placeholder="Enter your password" type="password" value={signUpPassword} onChange={handleSignUpPasswordChange}/>
                  <input placeholder="Confirm your password" type="password" value={signUpConfirmationPassword} onChange={handleSignUpConfirmationPasswordChange}/>
                  <button onClick={signUpUser}>Submit</button>
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
                  <input placeholder="Enter your email" type="email" value={loginEmail} onChange={handleLoginEmailChange} />
                  <input required placeholder="Enter your password" type="password" value={loginPassword} onChange={handleLoginPasswordChange}/>
                  <button onClick={logInUser}>Submit</button>
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
                {products?.length > 0 ? (
                  products.map((product) => (
                    <Link key={product.productName} to={`${window.location.href}/${product.id}`}>
                      <ProductCard product={product} />
                    </Link>
                  ))
                  ) : (
                    'No Items Found'
                  )}

                </div>
              </div>
            </section>
            <Footer merchantDetails={merchantDetails}/>
        </div>
      )
}

export default UserHomepage;