import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,compose,applyMiddleware, combineReducers} from 'redux'
import {Provider} from 'react-redux'
//import axios from 'axios'
//REDUCERS
import productsReducer from './Redux/reducers/productsReducer'
import cartReducer from './Redux/reducers/cartReducer'
import authReducer from './Redux/reducers/authReducer'
import thunk from 'redux-thunk'
import registerReducer from './Redux/reducers/registerReducer';
import orderReducer from './Redux/reducers/orderReducer';




const composeEnheancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
  productList: productsReducer,
  cart: cartReducer,
  auth: authReducer,
  register: registerReducer,
  orderCreate: orderReducer
})

const store= createStore(
  reducer,
  composeEnheancer(applyMiddleware(thunk))
)


// axios.interceptors.request.use(request=> {
//   console.log(request)
//   return request
// },error => {
//   console.log(error)
//   return Promise.reject(error)
// })

// axios.interceptors.response.use(response => {
//   console.log(response)
//   return response
// },error => {
//   return Promise.reject(error)
// })

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    
      <App />
    
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
