import React from "react";
import classes from "./input.module.css";

function Input({ children, ...props }) {
  return (
    <div>
      <input className={classes.input} type="text" {...props} />
    </div>
  );
}

export default Input;
