import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import { LoginParams, LoginPayloadParams, RegisterParams } from "./types";

export const fetchLogin = createAsyncThunk<LoginPayloadParams, LoginParams>(
    'login/fetchLoginStatus',
    async (params) => {
        const { userName, password, rememberMe } = params;
        const { data } = await axios.post<LoginPayloadParams>('/User/login', {
            userName,
            password,
            rememberMe
        });
        
        return data;
    });

export const fetchRegister = createAsyncThunk<LoginPayloadParams, RegisterParams>(
    'login/fetchRegisterStatus',
    async (params) => {
        const { userName, password, passwordConfirm, email } = params;
        const { data } = await axios.post('/User/registration', {
            userName,
            password,
            passwordConfirm,
            email
        });
        
        return data;
    });

export const fetchAuth = createAsyncThunk<LoginPayloadParams>(
    'login/fetchAuthStatus',
    async () => {
        const { data } = await axios.get<LoginPayloadParams>('/User/auth');
        console.log(data, 'data')
        
        return data;
    });
