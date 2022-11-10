import { RootState } from '../store';

export const selectLoginData = (state: RootState) => state.login;

export const selectIsAuth = (state: RootState) => Boolean(state.login.data.token);