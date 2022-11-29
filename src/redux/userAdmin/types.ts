import { Status } from '../../enum/EnumStatus';
export interface UserAdminState {
    users: Users[],
    usersStatus: Status,
    userDeleteStatus: Status,
}

export interface UserIdParams {
    id: string
}

export interface Users {
    id: string,
    email: string,
    roles: string[],
    userName: string
    city: string
    dateReg: string
    pathPhoto: string
    photoName: string
}