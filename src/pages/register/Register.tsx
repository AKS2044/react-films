import cl from './Register.module.scss';
import { useAppDispatch } from '../../redux/store';
import Button from '../../components/UI/button/Button';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { RegisterParams } from '../../redux/Auth/types';
import { fetchRegister } from '../../redux/Auth/asyncActions';

const defaultValues: RegisterParams = {
    email: '',
    userName: '',
    password: '',
    passwordConfirm: '',
}

const Register = () => {
    const dispatch = useAppDispatch();
    
    const { 
        register, 
        handleSubmit, 
        setError, 
        formState: {errors, isValid}} = useForm({
        defaultValues: defaultValues,
        mode: 'onChange'
    });

    const onSubmit = async (values: RegisterParams) => {
        dispatch(fetchRegister(values));
    }

    //const isAuth = useSelector();
    return (
        <div className={cl.register}>
                <div className={cl.register__title}>Авторизация</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={cl.register__block}>
                        <input 
                        className={cl.input} 
                        id="userName" 
                        placeholder="Логин"
                        {...register('userName', {required: 'Укажите почту'})} />
                        <input 
                        className={cl.input} 
                        id="password" 
                        placeholder="E-mail" 
                        {...register('email', {required: 'Укажите email'})} />
                        <input 
                        className={cl.input} 
                        id="password" 
                        placeholder="Пароль" 
                        {...register('password', {required: 'Укажите пароль'})} />
                        <input 
                        className={cl.input} 
                        id="passwordConfirm" 
                        placeholder="Повтори пароль" 
                        {...register('passwordConfirm', {required: 'Повтори пароль'})} />
                    </div>
                    <Button>Войти</Button>
                </form>
        </div>
    );
};

export default Register;