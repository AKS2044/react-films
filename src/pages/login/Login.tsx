import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import Button from '../../components/UI/button/Button';
import {TextField, Alert} from '@mui/material';
import cl from './Login.module.scss';
import { useForm } from 'react-hook-form';
import { LoginParams } from '../../redux/Auth/types';
import { fetchLogin } from '../../redux/Auth/asyncActions';
import { selectIsAuth, selectLoginData } from '../../redux/Auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import instance from '../../axios';

const defaultValues: LoginParams = {
    userName: 'thefan49@gmail.com',
    password: '123123',
    rememberMe: false,
}

const Login = () => {
    const isAuth = useSelector(selectIsAuth);
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/';
    const dispatch = useAppDispatch();
    
    const { data, statusLogin, error } = useSelector(selectLoginData);
    const { 
        register, 
        handleSubmit, 
        formState: {errors}} = useForm({
        defaultValues: defaultValues,
        mode: 'onChange'
    });
    
    const onSubmit = async (values: LoginParams) => {
            await dispatch(fetchLogin(values));
    }
        
    if(data.token){
        window.localStorage.setItem('token', String(data.token))
    }

    useEffect(() => {
        if(statusLogin === 'completed'){
            instance.defaults.headers.common['Authorization'] = window.localStorage.getItem('token');
        }
        }, [statusLogin]);

    if(isAuth){
        return <Navigate to={fromPage} />;
    }
    return (
            <div className={cl.login}>
                <div className={cl.login__title}>Авторизация</div>
                {statusLogin === 'error' && 
                <Alert className={cl.alert} variant="filled" severity="error">
                    <strong>{error}</strong>
                </Alert>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={cl.login__block}>
                        <TextField  
                        InputProps={{className: cl.input}} 
                        InputLabelProps={{className: cl.input__label}} 
                        label="Логин"
                        error={Boolean(errors.userName?.message)}
                        helperText={errors.userName?.message}
                        {...register('userName', {required: 'Укажите почту'})}  />
                        <TextField  
                        InputProps={{className: cl.input}} 
                        InputLabelProps={{className: cl.input__label}} 
                        label="Пароль"
                        type="password"
                        error={Boolean(errors.password?.message)}
                        helperText={errors.password?.message}
                        autoComplete="on"
                        {...register('password', {required: 'Укажите пароль'})} />
                    <div className={cl.login__block__links}>
                        <a className={cl.login__block__links__link} href='/'>Забыли пароль?</a>
                        <a className={cl.login__block__links__link} href='/'>Регистрация</a>
                    </div>
                    </div>
                    <Button>Войти</Button>
                </form>
            </div>
    );
};

export default Login;