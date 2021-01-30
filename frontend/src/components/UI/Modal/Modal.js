import React from "react";
import classes from "./Modal.module.css";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";
import { Link } from "react-router-dom";

const Modal = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.myModal}>
        <div>
          <h2>USPESNA KUPOVINA</h2>
          <div>
            <FaCheckCircle color="green" size="3em" />
          </div>
          <div><Link to="/">Povratak na pocetnu stranicu</Link></div>
          <div><Link to='/'>Pregled vasig porudzbina</Link></div>
          
        </div>
      </div>
    </div>
  );
};

export default Modal;
