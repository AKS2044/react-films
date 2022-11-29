import { createSlice } from "@reduxjs/toolkit";
import { Status } from '../../enum/EnumStatus';
import { fetchDeleteUser, fetchGetUsers } from "./asyncActions";
import { UserAdminState } from "./types";


const initialState: UserAdminState = {
    users: [],
    usersStatus: Status.LOADING,
    userDeleteStatus: Status.LOADING,
}


export const userAdminSlice = createSlice({
    name: 'userAdmin',
    initialState,
    reducers: {
    },
    
    extraReducers: (builder) => {
        // fetchGetUsers builder
        builder.addCase(fetchGetUsers.pending, (state) => {
            state.usersStatus = Status.LOADING;
        });
        builder.addCase(fetchGetUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.usersStatus = Status.SUCCESS;
        });
        builder.addCase(fetchGetUsers.rejected, (state) => {
            state.usersStatus = Status.ERROR;
        });

        // fetchDeleteUser builder
        builder.addCase(fetchDeleteUser.pending, (state) => {
            state.userDeleteStatus = Status.LOADING;
        });
        builder.addCase(fetchDeleteUser.fulfilled, (state, action) => {
            state.userDeleteStatus = Status.SUCCESS;
        });
        builder.addCase(fetchDeleteUser.rejected, (state) => {
            state.userDeleteStatus = Status.ERROR;
        });
        },
})

export const { } = userAdminSlice.actions

export default userAdminSlice.reducer