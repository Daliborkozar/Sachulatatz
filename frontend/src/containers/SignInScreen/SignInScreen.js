import React, { useEffect, useState } from 'react'
import {Link ,Redirect,useHistory, useLocation} from 'react-router-dom'

import classes from './SignInScreen.module.css'
import profileLogo from '../../assets/loginLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import {signin} from '../../Redux/actions/authActions'
import MessageBox from '../../components/UI/Message/MessageBox'

const SignInScreen = () => {
    const search = useLocation().search
    const redirect = search ? new URLSearchParams(search).get('redirect') : '/' 
    const history = useHistory() 
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const auth = useSelector(state => state.auth)
    const {userInfo, error} = auth
    console.log(history)

    
    console.log(redirect)

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const submitHandler =(e) => {
        e.preventDefault()
        dispatch(signin(email, password))
    }

    useEffect(()=> {
        if(userInfo) {
            history.push(redirect)
        }
    },[userInfo,history,redirect])
    

    return (
        <div className={classes.mainContent}>
            
            <form  className={classes.Form} onSubmit={submitHandler}>
                <img className={classes.logoP} src={profileLogo} alt="login logo" />
                <h1>MOJ NALOG</h1>
                {error ? <MessageBox>{error}</MessageBox> : null}
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
