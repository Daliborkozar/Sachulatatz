import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps'
import classes from './OrderScreen.module.css'


const OrderScreen = () => {
    const cart = useSelector(state => state.cart)

    let cartSumQty = cart.cartItem.reduce((prev, current) => {
        return prev + current.qty * 1}, 0);
    let cartSumPrice = cart.cartItem.reduce((acc, value) => acc + value.price * value.qty, 0)
  
    return (
        <div>
            <CheckoutSteps step1 step2 step3 />
            <div className={classes.OrderContainer}>
                <div className={classes.col2}>
                    <div className={classes.BoxShadow}>
                        <h2>Dostava</h2>
                    <ul>
                        <li><strong>Ime:</strong> {cart.shippingAddress.fullName}</li>
                        <li><strong>Adresa:</strong> {cart.shippingAddress.address}</li>
                        <li><strong>Postanski broj:</strong> {cart.shippingAddress.postalCode}</li>
                        <li><strong>Broj Telefona:</strong> {cart.shippingAddress.phone}</li>
                    </ul>
                    </div>
                    <div className={classes.BoxShadow}>
                        <h2>Nacin Placanja</h2>
                        <p>Pouzecem, Kurirska sluzba</p>
                    </div>
                    <div>
                        <h2>Proizvodi</h2>
                        <ul>
                                {cart.cartItem.map(item => (
                                    <li className={classes.ProductList}>
                                    <div className={classes.min10}>
                                        <img className={classes.imgSmall} src={item.image} alt={item.name}/>
                                    </div>
                                    <div className={classes.min25}>
                                        {item.name}
                                    </div>
                                    <div>
                                        Vel: {item.size}
                                    </div>
                                    <div>
                                        Kol: {item.qty}
                                    </div>
                                    <div>cena: {item.price},00 rsd</div>
                                
                                    </li>
                                ))}

                        </ul>
                    </div>
                </div>
                <div className={classes.column1}>
                    <div>
                        <h2>Vasa Korpa</h2>
                        <ul>
                            <li className={classes.rowMode}>
                                <div>Broj Proizvoda:</div>
                                <div>{cartSumQty}</div>
                            </li>
                            <li className={classes.rowMode}>
                                <div>Cena Proizvoda:</div>
                                <div>{cartSumPrice}</div>
                            </li>
                            <li className={classes.rowMode}>Dostava</li>
                            <hr/>
                            <li className={classes.rowMode}>
                               <div>*Ukupno za placanje:</div>
                               
                               <div>{cartSumPrice},00 rsd</div>  
                            </li>
                        </ul>
                        <button className={classes.btn}>Zavrsi Porudzbinu</button>
                        <p className={classes.backLink}>*Cena dostave zavisi od tarife kurirskih sluzbi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderScreen
