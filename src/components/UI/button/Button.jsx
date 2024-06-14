import React from "react";
import classes from "./button.module.css";
import imgBtn from "../../../img/Icon.svg";

function Button({ children, ...props }) {
  return (
    <button {...props} className={classes.btn}>
      {<img className={classes.btn_img} src={imgBtn} alt="" />}
      {children}
    </button>
  );
}

export default Button;
