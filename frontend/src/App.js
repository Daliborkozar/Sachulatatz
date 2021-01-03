import React from 'react'
import data from './data'
import Product from './components/Product'






function App(){
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="/">
            <img src="logo.jpg" alt="logo" />
          </a>
          <a href="/" className="brand">
            Sachulatatz
          </a>
        </div>
        <div>
          <a href="/majce">Majice</a>

          <a href="/suveniri">Suveniri</a>
        </div>
        <div>
          <a href="/cart">Korpa</a>
          <a href="/signin">Sign in</a>
        </div>
      </header>
      <main>
        <div className="row center" >
          {data.products.map((product) => (
            <Product key={product._id} product={product}/>
          ))}
        </div>
      </main>
      <footer className="row center">
        <small>&copy; Copyright 2020, Sachulatatz creative wear brand</small>
      </footer>
    </div>
  );
}

export default App;
