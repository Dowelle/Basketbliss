import React from 'react';
import{ Link } from 'react-router-dom';
import './HomepageTwo.css';

import Order from '../assets/cart.png'
import Cart from '../assets/order.png'
import analytics from '../assets/analysis.png'
import Out from '../assets/out.png'

import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

function HomepageTwo() {
  return (
    <div className="HomepageTwo">
        <div className="intro">
            <h1>Glamshades</h1>
            <p>Glamorous Shades of Liptints</p>
        </div>
        <nav>
          <Link className="nav-button">
          <img src={ analytics }/>
              Analytics
          </Link>

          <Link className="nav-button">
          <img src={ analytics }/>
              Analytics
          </Link>

          <Link className="nav-button">
          <img src={ analytics }/>
              Analytics
          </Link>

          <Link className="nav-button">
          <img src={ analytics }/>
              Analytics
          </Link>
        </nav>

        <section className="product-section">
          <div className="top-bar">
            <h1>Glamshades</h1>
            <div className="top-bar-links">
              <Link className="link-container">My cart<img src={ Order }/> </Link>
              <Link className="link-container">My order<img src={ Cart }/> </Link>
              <button className="link-container">Sign out <img src={ Out } /> </button>
            </div>
          </div>

          <div className="sort">
            <input placeholder="Search items..."/>
            <div className="sort-buttons">
              <button>All</button>
              <button>Popular</button>
              <button>Lowest</button>
              <button>Highest</button>
            </div>
          </div>
          <div className="product-section">
            <h1>My products</h1>
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
