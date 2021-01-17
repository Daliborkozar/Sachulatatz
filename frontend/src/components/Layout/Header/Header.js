import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import Logo from '../../../assets/logo.jpg'
import {FaUser} from '@react-icons/all-files/fa/FaUser'
import classes from './Header.module.css'


const Header = () => {
    const cart = useSelector(state => state.cart )
    const {cartItem} = cart
    const userSignin = useSelector(state => state.auth)
    const {userInfo} = userSignin
    console.log(userInfo)

    let cartitems =
     cartItem.length > 0
     && (<span className="badge">{cartItem.length}</span>)

    let userSigninInfo = userInfo ? (
        <Link to="#">
          <span className={classes.UserIcon}>{<FaUser/>}</span>{userInfo.name}
        </Link>
    ) : (
    <>
        <Link to="/signin">Sign in</Link>
    </>
    )

    return (
        <>
            <header className="row">
            <div>
            <Link to="/">
                <img src={Logo} alt="logo" />
            </Link>
            <Link to="/" className="brand fade-in">
                Sachulatatz
            </Link>

            </div>
            <div>
            <Link to="/majce">Majice</Link>
            <Link to="/suveniri">Suveniri</Link>
            </div>
            <div>
            <Link to="/cart">Korpa {cartitems}</Link>
          
            {userSigninInfo}
            </div>
            </header>
        </>
    )
}

export default Header
