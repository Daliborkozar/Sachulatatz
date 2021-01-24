import React from 'react'
import classes from './CheckoutSteps.module.css'
import {FaCheckCircle} from '@react-icons/all-files/fa/FaCheckCircle'


const CheckoutSteps = (props) => {
    

    return (
    
        <section className={classes.container}>
        <div className={`${classes.progressBar} ${props.step1 ? classes.active : ""}`}>1<span>prijava</span></div>
        <div className={`${classes.line} ${props.step1 ? classes.activeLine : ""} `}></div>
        <div className={`${classes.progressBar} ${props.step2 ? classes.active : ""}`} >2<span>Vasi podaci</span></div>
        <div className={`${classes.line} ${props.step1 ? classes.activeLine : ""} `}></div>
        <div className={`${classes.progressBar} ${props.step3 ? classes.active : ""}`}>3<span>porudzbina</span></div>
        </section>

            
        
    )
}

export default CheckoutSteps
