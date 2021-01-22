import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps'
import classes from './ShippingScreen.module.css'
import {saveShippingAddress} from '../../Redux/actions/cartActions'
import { useHistory } from 'react-router-dom'

const ShippingScreen = () => {
    const userSignedIn = useSelector(state => state.auth)
    const {userInfo} = userSignedIn
    const dispatch = useDispatch()
    const history = useHistory() 
    const [fullName,setFullName] = useState('')
    const [address, setAddress] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [phone, setPhone] = useState('')

    if(!userInfo) {
        history.push('/signin')
    }

    const nameHandler = (e) => {
        setFullName(e.target.value)
    }

    const addressHandler = (e) => {
        setAddress(e.target.value)
    }

    const postalCodeHandler = (e) => {
        setPostalCode(e.target.value)
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value)
    }

    const submitHandler = () => {
        //TODO submit shipping address dispatch
        dispatch(saveShippingAddress({fullName,address,postalCode,phone}))
        history.push('/order')
    }
    return (
        <div>
            <CheckoutSteps step1 step2/>
            <form  className={classes.Form} onSubmit={submitHandler}>
                <div>
                    <h1>Adresa za isporuku</h1>
                </div>
                <div>
                    <lavel htmlFor="fullName">Ime i Prezime</lavel>
                    <input
                        type="text"
                        id="fullName"
                        placeholder="Ime i Prezime"
                        value={fullName}
                        required
                        onChange={nameHandler}
                    />
                </div>
                <div>
                    <lavel htmlFor="adress">Adresa i broj</lavel>
                    <input
                        type="text"
                        id="adress"
                        placeholder="Adresa"
                        value={address}
                        required
                        onChange={addressHandler}
                    />
                </div>
               
                <div>
                    <lavel htmlFor="postalCode">Postanski broj</lavel>
                    <input
                        type="text"
                        id="postalCode"
                        placeholder="Postanski broj"
                        value={postalCode}
                        required
                        onChange={postalCodeHandler}
                    />
                </div>
                <div>
                    <lavel htmlFor="phone">Telefon</lavel>
                    <input
                        type="text"
                        id="phone"
                        placeholder="Broj Telefona"
                        value={phone}
                        required
                        onChange={phoneHandler}
                    />
                </div>
                <div>
                    <label/>
                    <button className={classes.btn} type="submit">Nastavi</button>
                </div>
                
                

            </form>
        </div>
    )
}

export default ShippingScreen
