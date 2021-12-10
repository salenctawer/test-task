import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Main.module.scss'
import { useForm } from "react-hook-form";

const Main = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onLoginChange = (e) =>{
    let login = e.target.value
    props.updateLogin(login)
  }
  const onPasswordChange = (e) =>{
    let password = e.target.value
    props.updatePassword(password)
  }
  const onSubmit = (e) =>{
    props.addUser()
  }

  return (
    <div className={styles.main}>
      <NavLink className={styles.main__link} to='/login'>Вход в аккаунт</NavLink >
      <div className={styles.users}>
        <h2>Созданные пользователи</h2>
        <div className={styles.users__table}>
          <div className={styles.users__column}>
              <h3>Логин</h3>
              {props.users.map(user => <span>{user.login}</span>)}
          </div>
          <div className={styles.users__column}>
              <h3>Пароль</h3>
              {props.users.map(user => <span>{user.password}</span>)}
          </div>
        </div>
      </div>
      <div className={styles.addUsers}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h2>Форма создания пользователя</h2>
          <input className={styles.form__input}
          placeholder="Введите логин"
          name='login'
          type='text' 
          {...register('login',{
            onChange: onLoginChange,
            required: {
              value: true,
              message: 'Это поле обязательно'
            }
          })}
          value={props.newUserLogin}
          />
          <span className={styles.form__error}>{errors.login && errors.login.message}</span> 
          <input className={styles.form__input}
          placeholder="Введите логин"
          name='password'
          type='text' 
          {...register('password',{
            onChange: onPasswordChange,
            required: {
              value: true,
              message: 'Это поле обязательно'
            }
          })}
          value={props.newUserPassword}
          />
          <span className={styles.form__error}>{errors.password && errors.password.message}</span> 
          <button className={styles.form__button} type='submit'>Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
};

export default Main;
