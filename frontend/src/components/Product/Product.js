import React from 'react'
import {FaShoppingCart} from "@react-icons/all-files/fa/FaShoppingCart"
import {FaHeart} from '@react-icons/all-files/fa/FaHeart'
import Rating from '../Rating/Rating'
import {Link} from 'react-router-dom'
import classes from './Product.module.css'

const Product = (props) => {
    const {product} = props

    return (
        <div>
            <div className="card" key={product._id}>
              <Link to={`/product/${product._id}`}>
                <img
                  className="medium"
                  src={product.image}
                  alt={product.name}
                />
              </Link>
              <div className="cart-body">
                <Link to={`/product/${product._id}`}>
                  <h2>{product.name}</h2>
                </Link>
            </div>
              <div className={classes.rating}>
                <Rating rating={product.rating} numReviews = {product.numReviews}/>
              </div>
              <div className="product-bottom-details row">
                <div className="product-price">
                {/* <small>{product.salePrice ? product.salePrice + 'rsd' : null}</small> */}
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
