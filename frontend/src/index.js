import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,compose,applyMiddleware, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import productsReducer from './Redux/reducers/productsReducer'
import cartReducer from './Redux/reducers/cartReducer'
import thunk from 'redux-thunk'

const composeEnheancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
  productList: productsReducer,
  cart: cartReducer
})

const store= createStore(
  reducer,
  composeEnheancer(applyMiddleware(thunk))
)

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
