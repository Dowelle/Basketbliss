import React, { useEffect, useState } from 'react';
import './EditProfile.css';

import Nav from '../components/Nav';

import { editProduct, deleteProduct } from '../services/firebaseActions';

import plant from '../assets/plant.svg'
import plant2 from '../assets/plant2.svg'
import { useNavigate } from 'react-router-dom';

function EditProduct({merchantPageLink, product}) {
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productStock, setProductStock] = useState('')
  const [productDescription, setProductDescription] = useState('')

  const navigate = useNavigate()
  
  useEffect(() => {
    if(product) {
      const {productName, productPrice, productStock, productDescription} = product

      setProductName(productName);
      setProductPrice(productPrice);
      setProductStock(productStock);
      setProductDescription(productDescription);
    }
  }, [])

  const handleProductNameChange = (e) => {
    setProductName(e.target.value)
  }
  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value)
  }
  const handleProductcStockChange = (e) => {
    setProductStock(e.target.value)
  }
  const handleProductDescriptionChange = (e) => {
    setProductDescription(e.target.value)
  }

  const submitProduct = () => {
    const newProduct = {...product, productName, productPrice, productStock, productDescription};
    const productId = product.id
    const merchantId = sessionStorage.uid

    editProduct(productId, newProduct, merchantId)
  }

  const submitDeleteProduct = () => {
    const merchantId = sessionStorage.uid
    const productId = product.id

    deleteProduct(productId, merchantId).then(deleted => {
      if(deleted) {
        navigate(`/${merchantPageLink}`)
      }
    })
  }

  return (
    <div className="Edit-profile">
      <Nav/>
      <div className='edit-top'>
        <div className="inner-top">
            <h1>Edit Product Details:</h1>
            <input type="text" placeholder="Enter your product's name" value={productName} onChange={handleProductNameChange} />
            <input type="number" placeholder="Enter your product's price" value={productPrice} onChange={handleProductPriceChange} />
            <input type="number" placeholder="Enter your available stocks" value={productStock} onChange={handleProductcStockChange}/>
            <textarea className="product-textarea" placeholder='Enter your products description' value={productDescription} onChange={handleProductDescriptionChange}></textarea>
            <div style={{
              display:"flex",
              gap:"1rem"
            }}>
                <button onClick={submitProduct} className="saveprofile">Save</button>
                <button onClick={submitDeleteProduct} style={{
                  backgroundColor:"#940000",
                  color:"#fff",
                  padding:".5rem 1rem"
                }}>Remove Item</button>
            </div>
        </div>
      </div>


      <div className="edit-bottom">
        <img className="plantOne" src={plant} />
        <img className="plantTwo" src={plant2} />

        {/* <img className="girl" src={ Profilepic} /> */}

      </div>
        
    </div>
  )
}

export default EditProduct
