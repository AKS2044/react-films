import axios from 'axios';
import React, { useState } from 'react';
import Button from '../../components/UI/button/Button';
import { Formik, Form, Field } from 'formik';
import cl from './Login.module.scss'
import { useNavigate } from 'react-router-dom';

type LoginProps = {
    userName: string,
    password: string,
    rememberMe: false
}

const Login = () => {
    const [error, setError] = useState('');
    const initialValues: LoginProps = { userName: '', password: '', rememberMe: false};
    const navigate = useNavigate();
    
    const handleSubmit = (props: LoginProps) => {
        if(props.password && props.userName)
        {
        axios.post('https://localhost:44369/api/User/login',
        {
            userName: props.userName,
            password: props.password,
            rememberMe: props.rememberMe
        }).then((response) => {
            if(response.status === 200){
                navigate('/');
                localStorage.setItem('auth', 'true')
            }
            console.log(localStorage.getItem('auth'))
        }).catch((error) => {
            setError(error.response.data.message)
        })}
    }
    return (
        <Formik
        initialValues = {initialValues}
        onSubmit={(values, actions) => {
            handleSubmit(values)
            actions.setSubmitting(false);}}
        >
            <Form className={cl.login}>
                <div className={cl.login__title}>Авторизация</div>
                <div className={cl.login__block}>
                    {error && <div>{error}</div>}
                    <Field className={cl.input} id="userName" name="userName" placeholder="userName" />
                    <Field className={cl.input} id="password" name="password" placeholder="password" />
                    <Field id="rememberMe" name="rememberMe" type='checkbox' />
                <div className={cl.login__block__links}>
                    <a className={cl.login__block__links__link} href='/'>Забыли пароль?</a>
                    <a className={cl.login__block__links__link} href='/'>Регистрация</a>
                </div>
                </div>
                <Button >Submit</Button>
            </Form>
        </Formik>
    );
};

export default Login;