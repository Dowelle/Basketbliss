import {useState}from 'react';
import{ Link, useNavigate } from 'react-router-dom';
import './HomepageTwo.css';

import Order from '../assets/cart.png'
import Cart from '../assets/order.png'
import analytics from '../assets/analysis.png'
import Out from '../assets/out.png'

import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import {signOutUser} from '../services/firebaseActions'

function HomepageTwo() {
  const navigate = useNavigate()

  const signOutMerchant = () => {
            signOutUser().then((res) => {
                if(res) {
                    navigate('/')
                }
            })
        }
  return (
    <div className="HomepageTwo">
        {/* <div className="intro">
            <h1>Glamshades</h1>
            <p>Glamorous Shades of Liptints</p>
        </div> */}
        <nav>
          <Link className="nav-button">
          <img src={ analytics }/>
              Analytics
          </Link>

          <Link className="nav-button">
          <img src={ analytics }/>
              Items
          </Link>

          <Link to='/EditProfile' className="nav-button">
          <img src={ analytics }/>
              Edit Profile
          </Link>

          <Link className="nav-button">
          <img src={ analytics } onClick={signOutMerchant}/>
            Log Out
          </Link>
        </nav>

        <section className="product-section">
          <div className="top-bar">
            <h1>Glamshades</h1>
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
        <Footer/>
    </div>
  )
}

export default HomepageTwo
