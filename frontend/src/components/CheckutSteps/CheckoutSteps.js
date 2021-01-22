import React from 'react'
import classes from './CheckoutSteps.module.css'

const CheckoutSteps = () => {
    return (
        <section className={classes.container}>
        <div className={classes.progressBar}>Prijava</div>
        <div className={classes.line}></div>
        <div className={classes.progressBar} >Dostava</div>
        <div className={classes.line}></div>
        <div className={classes.progressBar}>Porudzbina</div>

        </section>

            
        
    )
}

export default CheckoutSteps
