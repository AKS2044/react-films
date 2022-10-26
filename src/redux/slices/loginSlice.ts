import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LoginState {
    userName: string,
    role: string,
    isAuth: boolean
}

const initialState: LoginState = {
    userName: '',
    role: '',
    isAuth: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {

    },
})

export const {  } = loginSlice.actions

export default loginSlice.reducer