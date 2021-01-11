import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../../components/Rating/Rating";

import { fetchProductDetails } from "../../Redux/actions/productsAction";
import classes from './ProductScreen.module.css'
import Loader from '../../components/UI/Loader/Loader'
import MessageBox from '../../components/UI/Message/MessageBox'

const ProductScreen = (props) => {
  const dispatch = useDispatch()
  const productDetail = useSelector(state => state.productList)
  const { currentProduct, error, loading } = productDetail
  

  
  const productId = props.match.params.id

  useEffect(() => {
    dispatch(fetchProductDetails(productId))
  }, [dispatch, productId]) 


  // const product = data.products.find((x) => x._id === props.match.params.id);
  // if (!product) {
  //   return <div>Proizvod nije pronadjen</div>;
  // }
  
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
      <img src={currentProduct.image} alt={currentProduct.name}></img>
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
            <div className="row">
              <div>Cena:</div>
              <div className="price">{currentProduct.price} rsd</div>
            </div>
          </li>
          <li>
            <div className="row">
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
              <button className={classes.btn}><span>Dodaj u korpu</span></button>
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
