import React from "react";
import classes from "./ButtonForms.module.css";

function ButtonForms({ children, ...props }) {
  return (
    <button {...props} className={classes.btnForms}>
      {children}
    </button>
  );
}

export default ButtonForms;
