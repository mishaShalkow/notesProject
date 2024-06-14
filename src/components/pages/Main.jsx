import React, { useState } from "react";
import Button from "../UI/button/Button";
import logo from "../../img/logo.png";
import imgBlock from "../../img/OBJECTSs.png";
import LoginForm from "./LoginForm";

function Main() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div class="wrapper">
      <section class="header">
        <div class="header_nav">
          <img className="header_logo _ibg" src={logo} alt="" />
          <div class="header_button">
            <Button onClick={() => setModalActive(true)}>Вход</Button>
          </div>
        </div>
      </section>
      <section class="mainBlock">
        <div className="mainBlock_items">
          <div className="mainBlock__title">
            <h1 class="title">Мои заметки</h1>
            <p className="subTitle">Не забывай о важном, храни его в облаке.</p>
          </div>
          <div class="mainBlock__img">
            <img class="imgBlock" src={imgBlock} alt="" />
          </div>
        </div>
      </section>
      <LoginForm active={modalActive} setActive={setModalActive} />
      <personPage />
      {/* <RegistrationForm active={modalActive} setActive={setModalActive} /> */}
    </div>
  );
}

export default Main;
