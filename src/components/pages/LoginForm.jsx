import React, { useState } from "react";
import "./LoginForm.css";
import Input from "../UI/button/Input";
import ButtonLogin from "../UI/button/ButtonLogin";
import RegistrationForm from "./RegistrationForm";
import personPage from "./personPage";

function LoginForm({ active, setActive, modalActive, setModalActive }) {
  const [useActive, setUseActive] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [email, setEmail] = useState("");
  const [passwordLogin, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const validPassword = localStorage.getItem("password");
    const validEmail = localStorage.getItem("email");
    console.log(passwordLogin);
    console.log(validPassword);
    if (passwordLogin === validPassword)
      if (email === validEmail) {
        setActive(false);
      } else {
        alert("error");
      }
    /*    if (passwordLogin === validPassword)
      if (email === validEmail) {
        alert("done");
      } else {
        alert("err");
      } */
  };
  return (
    <div
      class={active ? "login active" : "login"}
      onClick={() => setActive(false)}
    >
      <div
        class={active ? "login_container active" : "login_container"}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 class="login_title">Вход в ваш аккаунт</h1>
        <form class="formBlock_Registration" onSubmit={handleSubmit}>
          <span class="regostration_span">Email</span>
          <Input
            name="email"
            placeholder="Введите Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span class="regostration_span">Пароль</span>
          <Input
            type="password"
            name="passwordLogin"
            placeholder="Введите пароль"
            value={passwordLogin}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <div className="formBlock_footer">
          <div className="footer__subcription">
            <h1 class="footer_title">У вас нет аккаунта?</h1>
            <h1
              class="footer_href"
              onClick={() => {
                setLoginActive(true);
              }}
            >
              <a href=""></a>Зарегистрируйтесь
            </h1>
          </div>
          <ButtonLogin
            onClick={handleSubmit}
            class="btn_registration"
            type="submit"
          >
            Войти
          </ButtonLogin>
        </div>
      </div>
      <personPage personActive={useActive} setPersonActive={setUseActive} />
      <RegistrationForm
        formActive={loginActive}
        setFormActive={setLoginActive}
      />
    </div>
  );
}
export default LoginForm;
