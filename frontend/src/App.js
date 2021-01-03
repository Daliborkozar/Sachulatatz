import React from 'react'
import data from './data'
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { FaStarHalfAlt } from "@react-icons/all-files/fa/FaStarHalfAlt";
import {FaShoppingCart} from "@react-icons/all-files/fa/FaShoppingCart"
import {FaHeart} from '@react-icons/all-files/fa/FaHeart'






function App(){
  return (
    <div className="grid-container">
        <header className="row" >
            <div>
                <a><img src="logo.jpg" alt="logo"/></a>
                <a href="index.html" className="brand">Sachulatatz</a>
            </div>
            <div>
                <a href="majce.html">Majice</a>
               
                <a href="suveniri.html">Suveniri</a>
            </div>
            <div>
                <a href="cart.html">Korpa</a>
                <a href="singin.html">Sign in</a>
            </div>      
        </header>
        <main>
           <div className="row center">
               {
                   data.products.map(product => (
                    <div className="card" key={product._id}>
                    <a href={`/product/${product._id}`}>
                        <img className="medium" src={product.image} alt={product.name}/></a>
                    <div className="cart-body">
                        <a href={`/product/${product._id}`}>
                        <h2>{product.name}</h2>
                        </a>
                    </div>
                    <div className="rating">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStarHalfAlt />
                        
                    </div>
                    <div className="product-bottom-details row">
                        <div className="product-price"><small>1900,00 Rsd</small>{product.price} rsd</div>
                        <div className="product-links">
                            <FaHeart />
                            <FaShoppingCart />
                        </div>
                    </div>
                </div>
                   ))
               }
            
            
           
            
          </div>
        </main>
        <footer className="row center">
            <small>&copy; Copyright 2020, Sachulatatz creative wear brand</small> 
        </footer>
    </div>
    
  )
}

export default App;
