import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.jpg";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import classes from "./Header.module.css";
import {userSignout} from '../../../Redux/actions/authActions'

const Header = () => {
    const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart);
  const { cartItem } = cart;
  const userSignin = useSelector((state) => state.auth);
  const { userInfo } = userSignin;

  const signoutHandler= () => {
    dispatch(userSignout())
  }
  

  let cartitems = cartItem.length > 0 && (
    <span className="badge">{cartItem.length}</span>
  );

  let userSigninInfo = userInfo ? (
    <div className= {classes.DropDown}>
    <Link to="#">
      <span className={classes.UserIcon}>{<FaUser />}</span>
      {userInfo.name}
    </Link>
    <ul className={classes.DropDownContent}>
        <Link to='#singout' onClick={signoutHandler}>Sign Out</Link>
    </ul>
    </div>
  ) : (
    <>
      <Link to="/signin">Sign in</Link>
    </>
  );



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
  );
};

export default Header;
