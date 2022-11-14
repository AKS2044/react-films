import { createSlice } from "@reduxjs/toolkit";
import { Status } from '../../enum/EnumStatus';


const initialState = {
}


export const userAdminSlice = createSlice({
    name: 'userAdmin',
    initialState,
    reducers: {
    },
    
    extraReducers: (builder) => {
        },
})

export const { } = userAdminSlice.actions

export default userAdminSlice.reducer