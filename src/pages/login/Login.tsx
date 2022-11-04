import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import Button from '../../components/UI/button/Button';
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
    
    const { data, status } = useSelector(selectLoginData);
    const { 
        register, 
        handleSubmit, 
        setError, 
        formState: {errors, isValid}} = useForm({
        defaultValues: defaultValues,
        mode: 'onChange'
    });

    const onSubmit = async (values: LoginParams) => {
        dispatch(fetchLogin(values));
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={cl.login__block}>
                        <input 
                        className={cl.input} 
                        id="userName" 
                        placeholder="userName"
                        {...register('userName', {required: 'Укажите почту'})} />
                        <input 
                        className={cl.input} 
                        id="password" 
                        placeholder="password" 
                        {...register('password', {required: 'Укажите пароль'})} />
                        <input 
                        id="rememberMe" 
                        type='checkbox' 
                        {...register('rememberMe')} />
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