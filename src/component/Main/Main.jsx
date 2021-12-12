import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Main.module.scss";
import { useForm } from "react-hook-form";

const Main = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onLoginChange = (e) => {
    props.updateLogin(e.target.value);
  };
  const onPasswordChange = (e) => {
    props.updatePassword(e.target.value);
  };
  const onSubmit = () => {
    props.updateId(props.id + 1);
    props.addUser();
    setValue("login", "");
    setValue("password", "");
  };

  return (
    <div className={styles.main}>
      <NavLink className={styles.main__link} to="/login">
        Вход в аккаунт
      </NavLink>
      <div className={styles.users}>
        <h2>Созданные пользователи</h2>
        <div className={styles.users__table}>
          <div className={styles.users__column}>
            <h3>Id</h3>
            {props.users.map((user) => (
              <span key={user.id}>{user.id}</span>
            ))}
          </div>
          <div className={styles.users__column}>
            <h3>Логин</h3>
            {props.users.map((user) => (
              <span key={user.id}>{user.login}</span>
            ))}
          </div>
          <div className={styles.users__column}>
            <h3>Пароль</h3>
            {props.users.map((user) => (
              <span key={user.id}>{user.password}</span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.addUsers}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h2>Форма создания пользователя</h2>
          <input
            className={styles.form__input}
            placeholder="Введите логин"
            name="login"
            type="text"
            {...register("login", {
              onChange: onLoginChange,
              required: {
                value: true,
                message: "Это поле обязательно",
              },
            })}
          />
          <span className={styles.form__error}>
            {errors.login && errors.login.message}
          </span>
          <input
            className={styles.form__input}
            placeholder="Введите пароль"
            name="password"
            type="text"
            {...register("password", {
              onChange: onPasswordChange,
              required: {
                value: true,
                message: "Это поле обязательно",
              },
            })}
          />
          <span className={styles.form__error}>
            {errors.password && errors.password.message}
          </span>
          <button className={styles.form__button} type="submit">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default Main;
