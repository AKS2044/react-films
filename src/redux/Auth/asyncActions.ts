import { createAsyncThunk } from "@reduxjs/toolkit";
import { pickBy } from "lodash";
import axios from "../../axios";
import { GetProfileParams, LoginParams, LoginPayloadParams, ProfilePayloadParams, RegisterParams } from "./types";

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
        const { userName, password, passwordConfirm, email, city } = params;
        const { data } = await axios.post<LoginPayloadParams>('/User/registration', {
            userName,
            password,
            passwordConfirm,
            email,
            city
        });
        return data;
    });

export const fetchGetProfile = createAsyncThunk<ProfilePayloadParams, LoginPayloadParams>(
    'login/fetchGetProfileStatus',
    async (params) => {
        const { userName } = params;
        const { data } = await axios.get<ProfilePayloadParams>('/User/profile', {
            params: pickBy({
                userName: userName
        })});
        return data;
    });

export const fetchUploadPhoto = createAsyncThunk<string, FormData>(
        'login/fetchUploadPhotoStatus',
        async (formData) => {
            console.log(FormData, 'отраб')
                const {data} = await axios.post('/User/uploadPhoto', formData);
                return data;
        });

export const fetchAuth = createAsyncThunk(
    'login/fetchAuthStatus',
    async () => {
        const { data } = await axios.get<LoginPayloadParams>('/User/auth');
        return data;
    });
