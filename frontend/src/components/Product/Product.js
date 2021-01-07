import React from 'react'
import {FaShoppingCart} from "@react-icons/all-files/fa/FaShoppingCart"
import {FaHeart} from '@react-icons/all-files/fa/FaHeart'
import Rating from '../Rating/Rating'
import classes from './Product.module.css'

const Product = (props) => {
    const {product} = props

    return (
        <div>
            <div className="card" key={product._id}>
              <a href={`/product/${product._id}`}>
                <img
                  className="medium"
                  src={product.image}
                  alt={product.name}
                />
              </a>
              <div className="cart-body">
                <a href={`/product/${product._id}`}>
                  <h2>{product.name}</h2>
                </a>
            </div>
              <div className={classes.rating}>
                <Rating rating={product.rating} numReviews = {product.numReviews}/>
              </div>
              <div className="product-bottom-details row">
                <div className="product-price">
                  <small>1900,00 Rsd</small>
                  {product.price} rsd
                </div>
                <div className="product-links">
                  <FaHeart />
                  <FaShoppingCart />
                </div>
              </div>
            </div>
        </div>
    )
}

export default Product
