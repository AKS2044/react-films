import { createSlice } from "@reduxjs/toolkit";
import { Status } from '../../enum/EnumStatus';
import { fetchLogin, fetchRegister, fetchAuth } from "./asyncActions";
import { LoginState, LoginPayloadParams } from "./types";


const initialState: LoginState = {
    data: {} as LoginPayloadParams,
    statusLogin: Status.LOADING,
    statusAuth: Status.LOADING,
    statusRegister: Status.LOADING,
}


export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = {} as LoginPayloadParams;
        },
    },
    
    extraReducers: (builder) => {
        builder.addCase(fetchLogin.pending, (state) => {
            state.statusLogin = Status.LOADING;
            state.data = {} as LoginPayloadParams;
        });
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.statusLogin = Status.SUCCESS;
            state.data = action.payload;
        });
        builder.addCase(fetchLogin.rejected, (state) => {
            state.statusLogin = Status.ERROR;
            state.data = {} as LoginPayloadParams;
        });

        builder.addCase(fetchRegister.pending, (state) => {
            state.statusRegister = Status.LOADING;
            state.data = {} as LoginPayloadParams;
        });
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            state.statusRegister = Status.SUCCESS;
            state.data = action.payload;
        });
        builder.addCase(fetchRegister.rejected, (state) => {
            state.statusRegister = Status.ERROR;
            state.data = {} as LoginPayloadParams;
        });

        builder.addCase(fetchAuth.pending, (state) => {
            state.statusAuth = Status.LOADING;
            state.data = {} as LoginPayloadParams;
        });
        builder.addCase(fetchAuth.fulfilled, (state, action) => {
            state.statusAuth = Status.SUCCESS;
            state.data = action.payload;
        });
        builder.addCase(fetchAuth.rejected, (state) => {
            state.statusAuth = Status.ERROR;
            state.data = {} as LoginPayloadParams;
        });
        },
})

export const { logout } = loginSlice.actions

export default loginSlice.reducer