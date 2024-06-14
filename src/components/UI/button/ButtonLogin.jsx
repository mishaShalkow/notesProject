import React from "react";
import classes from "./ButtonLogin.module.css";

function ButtonLogin({ children, ...props }) {
  return (
    <button {...props} className={classes.btnForms}>
      {children}
    </button>
  );
}

export default ButtonLogin;
