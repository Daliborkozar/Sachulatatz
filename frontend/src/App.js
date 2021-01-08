import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import HomeScreen from './containers/HomeScreen/HomeScreen'
import ProductScreen from './containers/ProductScreen/ProductScreen'
import Logo from './assets/logo.jpg'

function App(){
  
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a href="/">
            <img src={Logo} alt="logo" />
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
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path='/' component={HomeScreen} exact></Route>
        
      </main>
      <footer className="row center">
        <small>&copy; Copyright {new Date().getFullYear()}, Sachulatatz creative wear brand</small>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
