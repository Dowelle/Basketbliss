import {useState, useEffect}from 'react';
import{ Link, useNavigate } from 'react-router-dom';
import './HomepageTwo.css';

import Order from '../assets/cart.png'
import Cart from '../assets/order.png'

import Out from '../assets/out.png'

import ProductCard from '../components/ProductCard';
import Nav from '../components/Nav'
import Footer from '../components/Footer';
import {getMerchantDetails, signOutUser, getImageUrl} from '../services/firebaseActions'

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

  useEffect(() => {
    const merchantId = sessionStorage.uid;

    getMerchantDetails(merchantId).then(async (res) => {
      if(res) {
        const tempProducts = res.products

        console.log(tempProducts);

        if (tempProducts) {
          try {
            const updatedProducts = await Promise.all(tempProducts.map(async (tempProduct) => {
              if (tempProduct) {
                const urls = await getImageUrl(tempProduct);
                tempProduct.pictures = urls;
                return tempProduct;
              }
            }));
      
            console.log(updatedProducts);
            setProducts(updatedProducts);
          } catch (error) {
            // Handle errors
            console.error("Error updating products:", error);
          }
        }
      }
    })
  }, [])

  return (
    <div className="HomepageTwo">
        {/* <div className="intro">
            <h1>Glamshades</h1>
            <p>Glamorous Shades of Liptints</p>
        </div> */}
        <Nav setCertainState={setCertainState} merchantDetails={merchantDetails}/>

        <section className="product-section">
          <div className="top-bar">
            <h1>{merchantDetails.merchantName}</h1>
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
              {products?.map(product => <ProductCard key={product.productName} product={product}/>) || 'No Items Found'}
            </div>
          </div>
        </section>
        <Footer merchantDetails={merchantDetails}/>
    </div>
  )
}

export default HomepageTwo
