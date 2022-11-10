import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import Button from '../../components/UI/button/Button';
import {TextField, Alert} from '@mui/material';
import cl from './Login.module.scss';
import { useForm } from 'react-hook-form';
import { LoginParams } from '../../redux/Auth/types';
import { fetchLogin } from '../../redux/Auth/asyncActions';
import { selectIsAuth, selectLoginData } from '../../redux/Auth/selectors';
import { Navigate } from 'react-router-dom';

const defaultValues: LoginParams = {
    userName: '',
    password: '',
    rememberMe: false,
}

const Login = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useAppDispatch();

    const { data, statusLogin } = useSelector(selectLoginData);
    const { 
        register, 
        handleSubmit, 
        formState: {errors}} = useForm({
        defaultValues: defaultValues,
        mode: 'onChange'
    });

    const onSubmit = async (values: LoginParams) => {
            await dispatch(fetchLogin(values));
            
            window.location.reload();
    }
        
    if(data.token){
        window.localStorage.setItem('token', String(data.token))
    }

    if(isAuth){
        return <Navigate to='/' />;
    }
    return (
            <div className={cl.login}>
                <div className={cl.login__title}>Авторизация</div>
                {statusLogin === 'error' && 
                <Alert className={cl.alert} variant="filled" severity="error">
                    Логин или пароль — <strong>не верны!</strong>
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