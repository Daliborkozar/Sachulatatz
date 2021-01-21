import React, { useEffect, useState } from 'react'
import {Link ,useHistory, useLocation} from 'react-router-dom'

import classes from './RegisterScreen.module.css'
import profileLogo from '../../assets/loginLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import {register} from '../../Redux/actions/authActions'
import MessageBox from '../../components/UI/Message/MessageBox'

const RegisterScreen = (props) => {
    const search = useLocation().search
    const redirect = search ? new URLSearchParams(search).get('redirect') : '/' 
    const history = useHistory() 
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const userRegister = useSelector(state => state.register)
    const {userInfo, error} = userRegister
    

    
    console.log(redirect)

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const confirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value)
    }

    const submitHandler =(e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            alert('Passwords do not match // Potrvdjena lozinka je neispravna')
        }else {
            dispatch(register(name,email,password))
        }
        
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
                <h1>MOJ NALOG REGISTRACIJA</h1>
                {error ? <MessageBox>{error}</MessageBox> : null}
                <div>
                    <label htmlFor="name">Ime</label>
                    <input 
                        type="text"
                        id="name"
                        placeholder="Ime"
                        required
                        onChange={nameHandler}
                    />
                </div>
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
                    <label htmlFor="confirmPassword">Lozinka</label>
                    <input 
                        type="password"
                        id="confirmPassword"
                        placeholder="Potvrdi Lozinku"
                        required
                        onChange={confirmPasswordHandler}
                    />
                </div>
                <div>
                    <label/>
                    <button className={classes.btn} type="submit">Registruj se</button>
                </div>
                <div>
                    <label/>
                    Imate nalog? {' '}
                    <Link to='/signin'>Prijavi se</Link>
                </div>
                <p class={classes.disclaimer}>*Vaše informacije nece biti deljene bez vaše saglasnosti</p>
            </form>
           
            
            
        </div>
    )
}

export default RegisterScreen
