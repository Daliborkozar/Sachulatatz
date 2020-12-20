import React from 'react'


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
            <div className="card">
                <a href="product.html">
                    <img className="medium" src="slika2.jpg" alt="product"/></a>
                <div className="cart-body">
                    <a href="product.html">
                    <h2>Save the queen</h2>
                    </a>
                </div>
                <div className="rating">
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                    <span><i className="fa fa-star"></i></span>
                </div>
                <div className="product-bottom-details row">
                    <div className="product-price"><small>1900,00 Rsd</small>1200,00 Rsd</div>
                    <div className="product-links">
                        <a href=""><i className="fa fa-heart"></i></a>
                        <a href=""><i className="fa fa-shopping-cart"></i></a>
                    </div>
                </div>
            </div>
            
           
            
          </div>
        </main>
        <footer className="row center">
            <small>&copy; Copyright 2020, Sachulatatz creative wear brand</small> 
        </footer>
    </div>
    
  )
}

export default App;
