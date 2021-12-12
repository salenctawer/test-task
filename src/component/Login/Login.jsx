import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";

const Login = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    if (
      props.users.find(
        (user) => user.login === login && user.password === password
      )
    ) {
      alert("Вход успешен");
    } else {
      alert("Неправильный логин или пароль");
    }
    setValue("login", "");
    setValue("password", "");
  };
  const onLoginChange = (e) =>{
    setLogin(e.target.value)
  }
  const onPasswordChange = (e) =>{
    setPassword(e.target.value)
  }
  return (
    <div className={styles.loginPage}>
      <NavLink className={styles.loginPage__link} to="/">
        Регистрация аккаунта
      </NavLink>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2>Форма авторизации</h2>
        <input
          className={styles.form__input}
          onChange={(e) => setLogin(e.target.value)}
          name="login"
          type="text"
          placeholder="Введите логин"
          {...register("login", {
            onChange: onLoginChange,
            required: {
              value: true,
              message: "Это поле обязательно",
            },
          })}
        ></input>
        <span className={styles.form__error}>
            {errors.login && errors.login.message}
        </span>
        <input
          className={styles.form__input}
          placeholder="Введите пароль"
          {...register("password", {
            onChange: onPasswordChange,
            required: {
              value: true,
              message: "Это поле обязательно",
            },
          })}
        ></input>
        <span className={styles.form__error}>
            {errors.password && errors.password.message}
        </span>
        <button className={styles.form__button} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
