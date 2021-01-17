import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import HomeScreen from './containers/HomeScreen/HomeScreen'
import ProductScreen from './containers/ProductScreen/ProductScreen'
import Layout from './components/Layout/Layout'
import CartScreen from './containers/CartScreen/CartScreen'

import SignInScreen from './containers/SignInScreen/SignInScreen'
import ShippingScreen from './containers/ShippingScreen/ShippingScreen'



function App(){
  
  return (
    <BrowserRouter>
    <div className="grid-container">
      <Layout>
      <main>
        
        <Route path='/cart/:id?' component={CartScreen}></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path='/shipping' component={ShippingScreen}></Route>
        <Route path='/signin' component={SignInScreen}></Route>
        <Route path='/' component={HomeScreen} exact></Route>
        
        
      </main>
      </Layout>
    </div>
    </BrowserRouter>
  );
}

export default App;
