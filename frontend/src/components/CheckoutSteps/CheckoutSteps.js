import React from 'react'
import classes from './CheckoutSteps.module.css'



const CheckoutSteps = (props) => {
    

    return (
        <div className={classes.wrapper}>
        <section className={classes.container}>
        <div className={`${classes.progressBar} ${props.step1 ? classes.active : ""}`}>1<span>Prijava</span></div>
        <div className={`${classes.line} ${props.step1 ? classes.activeLine : ""} `}></div>
        <div className={`${classes.progressBar} ${props.step2 ? classes.active : ""}`} >2<span>Vaši podaci</span></div>
        <div className={`${classes.line} ${props.step1 ? classes.activeLine : ""} `}></div>
        <div className={`${classes.progressBar} ${props.step3 ? classes.active : ""}`}>3<span>Porudžbina</span></div>
        </section>
        </div>

            
        
    )
}

export default CheckoutSteps
