import cl from './Register.module.scss';
import { useAppDispatch } from '../../redux/store';
import Button from '../../components/UI/button/Button';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { RegisterParams } from '../../redux/Auth/types';
import { fetchRegister, fetchUploadPhoto } from '../../redux/Auth/asyncActions';
import {TextField} from '@mui/material';
import Alert from '../../components/UI/alert/Alert';
import { selectIsAuth, selectLoginData } from '../../redux/Auth/selectors';
import { useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import profile from '../../img/profile.png'
import Modal from '../../components/modal/Modal';
import instance from '../../axios';

const defaultValues: RegisterParams = {
    email: '',
    userName: '',
    password: '',
    city: '',
    passwordConfirm: '',
}
const Register = () => {
    const isAuth = useSelector(selectIsAuth);
    const inputFileRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [active, setActive] = useState(true);
    const dispatch = useAppDispatch();
    const { data, statusRegister, error, urlPhoto, uploadPhotoStatus } = useSelector(selectLoginData);
    
    const { 
        register, 
        handleSubmit, 
        formState: {errors, isValid}} = useForm({
        defaultValues: defaultValues,
        mode: 'onBlur'
    });

    const onSubmit = async (values: RegisterParams) => {
        await dispatch(fetchRegister(values));
        setActive(true);
    }

    useEffect(() => {
        if(statusRegister === 'completed'){
            instance.defaults.headers.common['Authorization'] = window.localStorage.getItem('token');
        }
        }, [statusRegister]);


    const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) =>{
        try{
            const formData = new FormData();
            const file = e.target.files![0];
            formData.append('file', file);
            
            dispatch(fetchUploadPhoto(formData));
        } catch(err) {
            console.log(err)
        }
    }

    const onClickLaterUploadPhoto = () =>{
        return navigate("/");
    }

    if(data.token){
        window.localStorage.setItem('token', String(data.token));
    }
    
    if(isAuth){
        return <Navigate to="/" />;
    }
    
    return (
        <div className={cl.register}>
                <div className={cl.register__title}>Регистрация</div>
                {statusRegister === 'error' && <>{error.map((e, i) => <Alert key={i} severity="error">
                    <strong>{e.message}</strong>
                    </Alert>)}</>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={cl.register__block}>
                        <TextField  
                        InputProps={{className: cl.input}} 
                        InputLabelProps={{className: cl.input__label}} 
                        label="Логин"
                        error={Boolean(errors.userName?.message)}
                        helperText={errors.userName?.message}
                        {...register('userName', {required: 'Укажите логин'})}  />
                        <TextField  
                        InputProps={{className: cl.input}} 
                        InputLabelProps={{className: cl.input__label}} 
                        label="E-mail"
                        error={Boolean(errors.email?.message)}
                        helperText={errors.email?.message}
                        {...register('email', {required: 'Укажите email'})}  />
                        <TextField  
                        InputProps={{className: cl.input}} 
                        InputLabelProps={{className: cl.input__label}} 
                        label="Ваш город"
                        error={Boolean(errors.city?.message)}
                        helperText={errors.city?.message}
                        autoComplete="off"
                        {...register('city', {required: 'Укажите ваш город'})}  />
                        <TextField  
                        InputProps={{className: cl.input}} 
                        InputLabelProps={{className: cl.input__label}} 
                        minRows={6}
                        label="Пароль"
                        type="password"
                        error={Boolean(errors.password?.message)}
                        helperText={errors.password?.message}
                        autoComplete="off"
                        {...register('password', {required: 'Укажите пароль'})} />
                        <TextField  
                        InputProps={{className: cl.input}} 
                        InputLabelProps={{className: cl.input__label}} 
                        minRows={6}
                        label="Повторите пароль"
                        type="password"
                        autoComplete="off"
                        error={Boolean(errors.passwordConfirm?.message)}
                        helperText={errors.passwordConfirm?.message}
                        {...register('passwordConfirm', {required: 'Повторите пароль'})} />
                        
                        <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeFile(e)}
                        type='file'
                        accept='image/*, .png, .jpg, .web'
                        ref={inputFileRef}
                        hidden
                        />
                        <div>
                </div>
                    </div>
                    <Button disabled={isValid} >Регистрация</Button>
                </form>
                {statusRegister === 'completed' && 
                <Modal
                active={active}
                setActive={setActive}>
                    <form className={cl.modal}>
                        <div className={cl.modal__title}>Загрузить фото профиля?</div>
                        <svg className={cl.modal__cross} onClick={onClickLaterUploadPhoto} width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.1967 7.19673L17.8033 17.8033M17.8033 7.19673L7.1967 17.8033" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        {urlPhoto 
                        ? <img className={cl.modal__photo} width={200} src={`https://localhost:44369/${urlPhoto}`} alt="Изображение профиля" title="Изображение профиля"  /> 
                        : <img className={cl.modal__photo} src={profile} alt="Изображение профиля" title="Изображение профиля" />}
                        <button type="button" className={cl.button} onClick={() => inputFileRef.current?.click()}>Загрузить фото</button>
                        {uploadPhotoStatus === 'loading'
                            &&<button type="button" className={cl.button} onClick={onClickLaterUploadPhoto}>Позже</button>}
                        {uploadPhotoStatus === 'completed'
                        && <button type="button" className={cl.button} onClick={onClickLaterUploadPhoto}>На главную</button>}
                    </form>
                </Modal>
                }
        </div>
    );
};

export default Register;