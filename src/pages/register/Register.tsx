import cl from './Register.module.scss';
import { useAppDispatch } from '../../redux/store';
import Button from '../../components/UI/button/Button';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { RegisterParams } from '../../redux/Auth/types';
import { fetchRegister, fetchUploadPhoto } from '../../redux/Auth/asyncActions';
import {TextField, Alert} from '@mui/material';
import { Navigate } from 'react-router-dom';
import { selectIsAuth, selectLoginData } from '../../redux/Auth/selectors';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
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
    const [active, setActive] = useState(false);
    const dispatch = useAppDispatch();
    const { data, statusRegister, statusAuth, urlPhoto, uploadPhotoStatus } = useSelector(selectLoginData);
    
    const { 
        register, 
        handleSubmit, 
        formState: {errors}} = useForm({
        defaultValues: defaultValues,
        mode: 'onChange'
    });

    const onSubmit = async (values: RegisterParams) => {
        await dispatch(fetchRegister(values));
        setActive(true);
    }

    useEffect(() => {
        instance.defaults.headers.common['Authorization'] = window.localStorage.getItem('token');
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
    
    if(statusAuth === 'completed'){
        navigate("/");
    }

    return (
        <div className={cl.register}>
                <div className={cl.register__title}>Авторизация</div>
                {statusRegister === 'error' && 
                <Alert className={cl.alert} variant="filled" severity="error">
                    Логин или E-mail — <strong>заняты!</strong>
                </Alert>}
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
                        {...register('city', {required: 'Укажите ваш город'})}  />
                        <TextField  
                        InputProps={{className: cl.input}} 
                        InputLabelProps={{className: cl.input__label}} 
                        label="Пароль"
                        type="password"
                        error={Boolean(errors.password?.message)}
                        helperText={errors.password?.message}
                        autoComplete="off"
                        {...register('password', {required: 'Укажите пароль'})} />
                        <TextField  
                        InputProps={{className: cl.input}} 
                        InputLabelProps={{className: cl.input__label}} 
                        label="Повтори пароль"
                        type="password"
                        autoComplete="off"
                        error={Boolean(errors.password?.message)}
                        helperText={errors.password?.message}
                        {...register('passwordConfirm', {required: 'Повтори пароль'})} />
                        
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
                    <Button>Регистрация</Button>
                </form>
                {statusRegister === 'completed' && 
                <Modal
                active={active}
                setActive={setActive}>
                    <form className={cl.modal}>
                        <div className={cl.modal__title}>Загрузить фото профиля?</div>
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