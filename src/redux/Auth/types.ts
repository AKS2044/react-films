import { Status } from '../../enum/EnumStatus';

export interface LoginState {
    data: LoginPayloadParams,
    statusLogin: Status,
    statusAuth: Status,
    statusRegister: Status,
}

export interface LoginParams {
    userName: string,
    password: string,
    rememberMe: boolean,
}

export interface RegisterParams {
    email: string,
    userName: string,
    password: string,
    passwordConfirm: string,
    pathPhoto?: string,
    photoName?: string
}

export interface LoginPayloadParams {
    email: string,
    roles: string[],
    token: boolean,
    userName: string
}
