import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import classes from './SignInScreen.module.css'

const SignInScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const submitHandler =(e) => {
        e.preventDefault()
    }

    return (
        <div className={classes.mainContent}>
            
            <form  onSubmit={submitHandler}>
                <h1>MOJ NALOG</h1>
                <div>
                    <label htmlFor="email">Email adresa</label>
                    <input 
                        type="email"
                        id="email"
                        placeholder="email adresa"
                        required
                        onChange={emailHandler}
                    />
                </div>
                <div>
                    <label htmlFor="password">Lozinka</label>
                    <input 
                        type="password"
                        id="password"
                        placeholder="Lozinka"
                        required
                        onChange={passwordHandler}
                    />
                </div>
                <div>
                    <label/>
                    <button className={classes.btn} type="submit">Uloguj se</button>
                </div>
                <div>
                    <label/>
                    Nemate nalog? {' '}
                    <Link to='/register'>Registruj se</Link>
                </div>
                <p class={classes.disclaimer}>*Vaše informacije nece biti deljene bez vaše saglasnosti</p>
            </form>
           
            
            
        </div>
    )
}

export default SignInScreen
