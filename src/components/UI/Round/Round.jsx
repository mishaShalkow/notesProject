import React from "react";
import classes from "./Round.module.css";

function Round({ children, ...props }) {
  return (
    <button {...props} className={classes.round}>
      {/* <img src="/src/img/round.png" /> */} X{children}
    </button>
  );
}

export default Round;
