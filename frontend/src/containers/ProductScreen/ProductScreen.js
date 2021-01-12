import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../../components/Rating/Rating";
import {Link} from 'react-router-dom'
import { fetchProductDetails } from "../../Redux/actions/productsAction";
import classes from './ProductScreen.module.css'
import Loader from '../../components/UI/Loader/Loader'
import MessageBox from '../../components/UI/Message/MessageBox'

const ProductScreen = (props) => {
  const dispatch = useDispatch()
  const productDetail = useSelector(state => state.productList)
  const { currentProduct, error, loading } = productDetail
  

  
  const productId = props.match.params.id
  console.log(productId)

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
      <Link to='/'>Back to results</Link>
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
              <form >
                
                <label>
                  Velicina:
                  <select>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                  </select>
                </label>
                
                <label>
                  Kolicina:
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                    <option value="1">5</option>
                    <option value="1">6</option>
                  </select>
                </label>
                <input className={classes.btn} type="submit" value="Dodaj u korpu" />
              </form>
              // <div className={classes.rowMode}>
              //   <label>Kol</label>

              // </div>

              // <li>
              // <button className={classes.btn}><span>Dodaj u korpu</span></button>
              // </li>
              
               
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
