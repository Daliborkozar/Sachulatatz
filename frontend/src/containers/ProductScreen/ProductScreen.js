import React from "react";
import Rating from "../../components/Rating/Rating";
import data from "../../data/data";
import classes from './ProductScreen.module.css'

const ProductScreen = (props) => {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div>Proizvod nije pronadjen</div>;
  }
  return (
    <div className={classes.productcontainer}>
      <div className={classes.col2}>
        <img src={product.image} alt={product.name}></img>
      </div>

      <div className={classes.col1}>
      <div className="card card-body">
        <ul>
          <li>
            <h1>{product.name}</h1>
          </li>
          <li>
            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
            ></Rating>
          </li>
          <li>Cena: {product.price} rsd</li>
          <li>
            Opis: <p>{product.descpription}</p>
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
                <div className="price">{product.price} rsd</div>
              </div>
            </li>
            <li>
              <div className="row">
                <div>Stanje:</div>
                <div>
                  {product.countInStock > 0 ? (
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
  );
};

export default ProductScreen;
