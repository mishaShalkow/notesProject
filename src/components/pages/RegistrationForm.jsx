import React, { useEffect, useState } from "react";
import Input from "../UI/button/Input";
import ButtonForms from "../UI/button/ButtonForms";

const RegistrationForm = ({ formActive, setFormActive, children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState(
    "поле email не может быть пустым"
  );
  const [passwordError, setPasswordError] = useState(
    "поле password не может быть пустым"
  );
  const [confirmPasswordError, setconfirmPasswordError] = useState(
    "поле password не может быть пустым"
  );

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError || confirmPasswordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, confirmPasswordError]);

  const emailHeandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError("не корректный email");
    } else {
      setEmailError("");
    }
  };

  const passwordHeandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError("пароль должен быть больше 3 и меньше 8 символов");
      if (!e.target.value) {
        setPasswordError("поле password не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const confirmPasswordHeandler = (e) => {
    setconfirmPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setconfirmPasswordError(
        "пароль должен быть больше 3 и меньше 8 символов"
      );
      if (!e.target.value) {
        setconfirmPasswordError("поле password не может быть пустым");
      }
    } else {
      setconfirmPasswordError("");
    }
  };

  const blurHeandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "confirmPassword":
        setConfirmPasswordDirty(true);
        break;
    }
  };

  const submitForms = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmPassword", confirmPassword);
    alert("Аккаунт успешно создан");
    setFormActive(false);
  };
  return (
    <div
      className={formActive ? "modal active" : "modal"}
      onClick={() => setFormActive(false)}
    >
      <div
        className={
          formActive ? "formBlock_container active" : "formBlock_container"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <h1 class="formBlockTitle">Регистрация</h1>
        <form class="formBlock_Registration" onSubmit={submitForms}>
          <span class="regostration_span">Email</span>
          {emailDirty && emailError && (
            <div style={{ color: "red" }}>{emailError}</div>
          )}
          <Input
            onBlur={(e) => blurHeandler(e)}
            name="email"
            value={email}
            placeholder="Введите Email"
            onChange={(e) => emailHeandler(e)}
          />
          <span class="regostration_span"> Пароль </span>
          {passwordDirty && passwordError && (
            <div style={{ color: "red" }}>{passwordError}</div>
          )}
          <Input
            onBlur={(e) => blurHeandler(e)}
            name="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => passwordHeandler(e)}
          />
          <span class="regostration_span">Пароль ещё раз</span>
          {confirmPasswordDirty && confirmPasswordError && (
            <div style={{ color: "red" }}>{confirmPasswordError}</div>
          )}
          <Input
            onBlur={(e) => blurHeandler(e)}
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Повторите пароль"
            onChange={(e) => confirmPasswordHeandler(e)}
          />
        </form>
        <div className="formBlock_subscription">
          <div className="subcription__title">
            <h1 class="subscription_title">У вас есть аккаунт?</h1>
            <h1 class="subscription_titleHref">
              <a href=""></a>Войдите
            </h1>
          </div>
          <ButtonForms
            disabled={!formValid}
            onClick={submitForms}
            class="btn_registration"
            type="submit"
            value="Submit"
          >
            Зарегистрироваться
          </ButtonForms>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
