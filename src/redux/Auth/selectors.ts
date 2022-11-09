import { RootState } from '../store';

export const selectLoginData = (state: RootState) => state.login;

export const selectIsAuth = (state: RootState) => Boolean(state.login.data.token);

export const selectIsAdmin = (state: RootState) => Boolean(state.login.data.roles.find((r) => r === 'Admin'));