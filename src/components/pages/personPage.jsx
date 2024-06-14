import React from "react";
import personPage from "./personPage";

function personPage({ personActive, setPersonActive }) {
  return (
    <div
      className={personActive ? "wrapper active" : "wrapper"}
      onClick={() => setPersonActive(false)}
    >
      <div
        className={personActive ? "container active" : "container"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="container__header">
          <div className="header">
            <div className="header_logo"></div>
            <div className="header_user"></div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default personPage;
