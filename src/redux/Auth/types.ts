import { Status } from '../../enum/EnumStatus';

export interface LoginState {
    data: LoginPayloadParams,
    status: Status,
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
    roles: [],
    token: boolean,
    userName: string
}
