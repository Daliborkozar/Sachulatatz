import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import HomeScreen from './containers/HomeScreen/HomeScreen'
import ProductScreen from './containers/ProductScreen/ProductScreen'
import Layout from './components/Layout/Layout'
import CartScreen from './containers/CartScreen/CartScreen'

import SignInScreen from './containers/SignInScreen/SignInScreen'
import RegisterScreen from './containers/RegisterScreen/RegisterScreen'
import ShippingScreen from './containers/ShippingScreen/ShippingScreen'
import OrderScreen from './containers/OrderScreen/OrderScreen'



function App(){
  
  return (
    <BrowserRouter>
      <Layout>
      <main>
        <Route path='/cart/:id?' component={CartScreen}></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path='/shipping' component={ShippingScreen}></Route>
        <Route path='/order' component={OrderScreen}></Route>
        <Route path='/signin' component={SignInScreen}></Route>
        <Route path='/register' component={RegisterScreen}></Route>
        <Route path='/' component={HomeScreen} exact></Route>
      </main>
      </Layout>
    
    </BrowserRouter>
  );
}

export default App;
