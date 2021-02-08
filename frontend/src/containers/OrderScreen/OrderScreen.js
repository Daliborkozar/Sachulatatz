import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps";
import Loader from "../../components/UI/Loader/Loader";
import MessageBox from "../../components/UI/Message/MessageBox";
import { createOrder, orderReset } from "../../Redux/actions/orderActions";
import classes from "./OrderScreen.module.css";
import Modal from '../../components/UI/Modal/Modal'

const OrderScreen = () => {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();
  const dispatch = useDispatch();
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  const [showModal, setShowModal] = useState(false)

  let cartSumQty = cart.cartItem.reduce((prev, current) => {
    return prev + current.qty * 1;
  }, 0);
  let cartSumPrice = cart.cartItem.reduce(
    (acc, value) => acc + value.price * value.qty,
    0
  );
  //sum for post req
  cart.totalPrice = cartSumPrice;
  console.log(cart);
  console.log(order);

  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItem: cart.cartItem }));

  };


  useEffect(() => {
    //redirect to order details page
    if (success) {
       
      //history.push(`/order/${order._id}`);
      dispatch(orderReset());
      setShowModal(true)
        
    }
  }, [dispatch, history, order, success]);

  const modal = showModal ? <Modal/> : <CheckoutSteps step1 step2 step3 /> 
  

  return (
    <div>
        {modal}
      <div className={classes.OrderContainer}>
        <div className={classes.col2}>
          <div className={classes.BoxShadow}>
            <h2>Dostava</h2>
            <ul>
              <li>
                <strong>Ime:</strong> {cart.shippingAddress.fullName}
              </li>
              <li>
                <strong>Adresa:</strong> {cart.shippingAddress.address}
              </li>
              <li>
                <strong>Poštanski broj:</strong>{" "}
                {cart.shippingAddress.postalCode}
              </li>
              <li>
                <strong>Broj Telefona:</strong> {cart.shippingAddress.phone}
              </li>
            </ul>
          </div>
          <div className={classes.BoxShadow}>
            <h2>Nacin Plaćanja</h2>
            <p>Pouzećem, Kurirska služba</p>
          </div>
          <div>
            <h2>Proizvodi</h2>
            <ul>
              {cart.cartItem.map((item) => (
                <li key={item._id} className={classes.ProductList}>
                  <div className={classes.min10}>
                    <img
                      className={classes.imgSmall}
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className={classes.min25}>{item.name}</div>
                  <div>Vel: {item.size}</div>
                  <div>Kol: {item.qty}</div>
                  <div>cena: {item.price},00 rsd</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={classes.column1}>
          <div>
            <h2>Vaša Korpa</h2>
            <ul>
              <li className={classes.rowMode}>
                <div>Broj Proizvoda:</div>
                <div>{cartSumQty}</div>
              </li>
              <li className={classes.rowMode}>
                <div>Cena Proizvoda:</div>
                <div>{cartSumPrice}</div>
              </li>
              <li className={classes.rowMode}>
                <div>*Dostava</div>
                <div>
                  {cartSumPrice >= 3000 ? "Besplatna" : "post express tarifa"}
                </div>
              </li>
              <hr />
              <li className={classes.rowMode}>
                <div>*Ukupno za plaćanje:</div>

                <div>{cartSumPrice},00 rsd</div>
              </li>
            </ul>
            <button onClick={placeOrderHandler} className={classes.btn}>
              Završi Porudžbinu
            </button>
            <p className={classes.backLink}>
              *Cena dostave zavisi od tarife kurirskih službi
            </p>
            <p className={classes.backLink}>
              *Besplatna dostava za porudžbine preko 3000 rsd
            </p>
            {/* { loading && <Loader /> }
                        { error && <MessageBox>{error}</MessageBox> } */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
