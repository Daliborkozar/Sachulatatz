import React from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom'
import HomeScreen from './containers/HomeScreen/HomeScreen'
import ProductScreen from './containers/ProductScreen/ProductScreen'
import Logo from './assets/logo.jpg'
import CartScreen from './containers/CartScreen/CartScreen'
import { useSelector } from 'react-redux'
import SignInScreen from './containers/SignInScreen/SignInScreen'



function App(){
  const cart = useSelector(state => state.cart )
  const {cartItem} = cart

  let cartitems = cartItem.length > 0 && (<span className="badge">{cartItem.length}</span>)
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <Link to="/" className="brand fade-in">
            Sachulatatz
          </Link>

        </div>
        <div>
          <Link to="/majce">Majice</Link>
          <Link to="/suveniri">Suveniri</Link>
        </div>
        <div>
          <Link to="/cart">Korpa {cartitems}</Link>
          <Link to="/signin">Sign in</Link>
        </div>
      </header>
      <main>
        
        <Route path='/cart/:id?' component={CartScreen}></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path='/signin' component={SignInScreen}></Route>
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
