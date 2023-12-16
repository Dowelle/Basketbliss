
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
            {/* <h1>{merchantDetails.merchantName}</h1> */}
            <div className="top-bar-links">
            <input placeholder="Search items..."/>
              <Link className="link-container">My cart<img src={ Order }/> </Link>
              <Link className="link-container">My order<img src={ Cart }/> </Link>
              <button className="link-container" onClick={signOutMerchant}>Sign out <img src={ Out } /> </button>
            </div>
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
