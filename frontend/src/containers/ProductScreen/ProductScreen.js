import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../../components/Rating/Rating";
import {Link} from 'react-router-dom'
import { fetchProductDetails } from "../../Redux/actions/productsAction";
import classes from './ProductScreen.module.css'
import Loader from '../../components/UI/Loader/Loader'
import MessageBox from '../../components/UI/Message/MessageBox'

//TODO: Size selection based on available sizes

const ProductScreen = (props) => {
  const dispatch = useDispatch()
  const productDetail = useSelector(state => state.productList)
  const { currentProduct, error, loading } = productDetail
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("S")
  

  
  const productId = props.match.params.id
  console.log(productId)

  useEffect(() => {
    dispatch(fetchProductDetails(productId))
  }, [dispatch, productId]) 


  const quatityhandler = (e) => {
    setQty(e.target.value)
  }

  const sizeHandler = (e) => {
    setSize(e.target.value)
  }

  const addtoCartHandler =(e) => {
    e.preventDefault()
    props.history.push(`/cart/${productId}?qty=${qty}&size=${size}`)
  }
  
  let detailsOfProduct = null

  if(loading){
    detailsOfProduct = <Loader />
  }else if(error){
    detailsOfProduct = <MessageBox>{error}</MessageBox>
  }else {
    detailsOfProduct = (
      <>
      
    <div className={classes.productcontainer}>
    <div className={classes.col2}>
      <img className={classes.imgBig} src={currentProduct.image} alt={currentProduct.name}></img>
    </div>

    <div className={classes.col1}>
    <div className="card card-body">
      <ul>
        <li>
          <h1>{currentProduct.name}</h1>
        </li>
        <li>
          <Rating
            rating={currentProduct.rating}
            numReviews={currentProduct.numReviews}
          ></Rating>
        </li>
        <li>Cena: {currentProduct.price} rsd</li>
        <li>
          Opis: <p>{currentProduct.descpription}</p>
        </li>
      </ul>
      </div>
    </div>

    <div className={classes.col1}>
      <div className="card card-body">
        <ul>
          <li>
            <div className={classes.rowMode}>
              <div>Cena:</div>
              <div className="price">{currentProduct.price} rsd</div>
            </div>
          </li>
          <li>
            <div className={classes.rowMode}>
              <div>Stanje:</div>
              <div>
                {currentProduct.countInStock > 0 ? (
                  <span className={classes.success}>Na Stanju</span>
                ) : (
                  <span className={classes.fail}>Nema na stanju</span>
                )}
              </div>
            </div>
          </li>
          <li>
            {currentProduct.countInStock > 0 && (
              <form onSubmit={addtoCartHandler}>
                <label>
                  Velicina:
                  <select 
                    value={size}
                    onChange={sizeHandler}>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                  </select>
                </label>
                
                <label>
                  Kolicina:
                  <select 
                  value={qty}
                  onChange={quatityhandler}>
                    {Array.from(Array(currentProduct.countInStock).keys()).map(x => (
                      <option key={x+1} value={x+1}>{x+1}</option>
                    ))}
                  </select>
                </label>
                <input className={classes.btn} type="submit" value="Dodaj u korpu" />
              </form>
            )}
          </li>
          
        </ul>
        
      </div>
      
    </div>
    
  </div>
  </>
   )
}

  return (
    <div>
      {detailsOfProduct}
    </div>
    
  );
};

export default ProductScreen;
