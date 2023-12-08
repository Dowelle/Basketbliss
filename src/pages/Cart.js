import './Cart.css'

import Dress1  from '../assets/dress1.jpg'
import Ellipse from '../assets/ellipse.png';
import Ellipse1 from '../assets/ellipse01.png';
import arrow from '../assets/leftarrow.png';
import namepage from '../assets/logobasket.png';

import Footer from '../components/Footer'

function Cart() {
  return (
    <div className="Cart">
      <h1>My Cart</h1>
      <div className="main-cart">
        <div className="cart-product">
          <img src={ Dress1 } />
          <div className="cart-detail">
            <h1>Dress</h1>
            <p>₱420.69</p>
            <p>x2</p>
            <p>₱841.38</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  
//   <header className='container_navbar'>
//       <div className="first_imge">
//         <img className="ellipse" alt="Ellipse" src={Ellipse} />
//         <img className="ellipse_01" alt="Ellipse" src={Ellipse1} />
//       </div>
//         <div className='bow_shoppe'>
//           <img className='bow' alt='' src={arrow}/>
//           <p>Continue Shopping</p>

//           <div className='basket_fix'>
//             <p>Basketbliss</p>
//             <img className='logo_page' alt='' src={namepage}/>
//           </div>
//         </div>

// {/*Cart*/}
//       <div className='cart_fix'>
//         <div className='cart_page'>
//           <h1>My Cart</h1>
//         </div>
//       </div>
// {/*Pricing*/}
//       <div className='pricing'>
//           <h3>Price</h3>
//           <h3>Quality</h3>
//           <h3>Total</h3>  
//       </div>

// {/* Horizontal */}  
//      <hr className='line_horizontal'></hr>

// {/* Dressing */}
//     <div className='cart_needs'>
//       <img  alt='' src={Dress1} />
//       <div className='type_dress'>
//       <h3 className='name_dress'>Apron Dress</h3>
//       <h3 className='color_size'>Color: White</h3>
//       <h3 className='color_size'>Size: Small</h3>
//       </div>
//       <div className='price_cart'>
//           <h3>₱ 300</h3>
//           <h3>1</h3>
//           <h3>₱ 300</h3>  
//       </div>
//     </div>

// {/* cart two */}
// <div className='cart_needs_two'>
//       <img  alt='' src={Dress1} />
//       <div className='type_dress'>
//       <h3 className='name_dress'>Apron Dress</h3>
//       <h3 className='color_size'>Color: White</h3>
//       <h3 className='color_size'>Size: Small</h3>
//       </div>
//       <div className='price_cart_two'>
//           <h3>₱ 300</h3>
//           <h3>1</h3>
//           <h3>₱ 300</h3>  
//       </div>
//     </div>

//   <div className='subtotal'>
//     <p>Subtotal</p>
//     <p className='change_color'>₱ 600</p>
// </div>

//     <div className='check_out_btn'>
//       <p>Checkout</p>
//     </div>

// {/* Horizontal */}  
// <hr className='line_horizontal_two'></hr>

// {/* cart third */}
// <div className='cart_needs_third'>
//       <img  alt='' src={Dress1} />
//       <div className='type_dress'>
//       <h3 className='name_dress'>Apron Dress</h3>
//       <h3 className='color_size'>Color: White</h3>
//       <h3 className='color_size'>Size: Small</h3>
//       </div>
//       <div className='price_cart_third'>
//           <h3>₱ 300</h3>
//           <h3>1</h3>
//           <h3>₱ 300</h3>  
//       </div>
//     </div>

// {/* Horizontal */}  
// <hr className='line_horizontal_third'></hr>


//     <div className='check_out_btn_two'>
//       <p>Checkout</p>
//     </div>

//   </header>
  
  )
}

export default Cart;