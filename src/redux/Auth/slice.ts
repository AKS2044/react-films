import { createSlice } from "@reduxjs/toolkit";
import { Status } from '../../enum/EnumStatus';
import { fetchLogin, fetchRegister, fetchAuth } from "./asyncActions";
import { LoginParams, LoginState, LoginPayloadParams } from "./types";


const initialState: LoginState = {
    data: {} as LoginPayloadParams,
    status: Status.LOADING
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
            state.status = Status.LOADING;
            state.data = {} as LoginPayloadParams;
        });
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.status = Status.SUCCESS;
            state.data = action.payload;
        });
        builder.addCase(fetchLogin.rejected, (state) => {
            state.status = Status.ERROR;
            state.data = {} as LoginPayloadParams;
        });

        builder.addCase(fetchRegister.pending, (state) => {
            state.status = Status.LOADING;
            state.data = {} as LoginPayloadParams;
        });
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            state.status = Status.SUCCESS;
            state.data = action.payload;
        });
        builder.addCase(fetchRegister.rejected, (state) => {
            state.status = Status.ERROR;
            state.data = {} as LoginPayloadParams;
        });

        builder.addCase(fetchAuth.pending, (state) => {
            state.status = Status.LOADING;
            state.data = {} as LoginPayloadParams;
        });
        builder.addCase(fetchAuth.fulfilled, (state, action) => {
            state.status = Status.SUCCESS;
            state.data = action.payload;
            
            console.log(state.data, 'sd');
        });
        builder.addCase(fetchAuth.rejected, (state) => {
            state.status = Status.ERROR;
            state.data = {} as LoginPayloadParams;
        });
        },
})


console.log(initialState.data, 'sd2');

export const { logout } = loginSlice.actions

export default loginSlice.reducer