import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from './Login.module.scss'

const Login = (props) =>{
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const submitForm = (e) =>{
        e.preventDefault()
        if(props.users.find(user => user.login === login && user.password===password)){
            alert('Вход успешен')
        }
        else {
            alert('Неправильный логин или пароль')
        }
    }
    return(
        <div className={styles.loginPage}>
        <NavLink className={styles.loginPage__link} to='/'>Регистрация аккаунта</NavLink>
            <form className={styles.form}>
                <input className={styles.form__input} onChange={e => setLogin(e.target.value)} value={login} placeholder="Введите логин"></input>
                <input className={styles.form__input} onChange={e => setPassword(e.target.value)} value={password} placeholder="Введите пароль"></input>
                <button className={styles.form__button} type="submit" onClick={submitForm}>Войти</button>
            </form>
        </div>
    )
}

export default Login