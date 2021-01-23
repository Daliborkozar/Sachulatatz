import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps'
import classes from './OrderScreen.module.css'


const OrderScreen = () => {
    const cart = useSelector(state => state.cart)
  
    return (
        <div>
            <CheckoutSteps step1 step2 step3 />
            <div className={classes.OrderContainer}>
                <div className={classes.col2}>
                    <div><h2>Dostava</h2>
                    <ul>
                        <li>Ime: {cart.shippingAddress.fullName}</li>
                        <li>Adresa:{cart.shippingAddress.address}</li>
                        <li>Postanski broj: {cart.shippingAddress.postalCode}</li>
                        <li>Broj Telefona: {cart.shippingAddress.phone}</li>
                    </ul>
                    </div>
                    <div>
                        <h2>Nacin Placanja</h2>
                        <p>Pouzecem, Kurirka sluzba</p>
                    </div>
                    <div>
                        <h2>Proizvodi</h2>
                        <div>
                            <div>Slika</div>
                            <div>naziv</div>
                            <div>velicina</div>
                            <div>cena</div>
                        </div>
                    </div>
                </div>
                <div className={classes.col1}>
                    <div>
                        <h2>Vasa Korpa</h2>
                        <ul>
                            <li>Proizvodi</li>
                            <li>Dostava</li>
                            <li>Ukupno</li>
                        </ul>
                        <button>Poruci</button>
                        <p>*Cena dostave zavisi od tarife kurirskih sluzbi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderScreen
