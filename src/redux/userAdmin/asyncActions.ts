import { createAsyncThunk } from "@reduxjs/toolkit";
import { pickBy } from "lodash";
import axios from "../../axios";
import { Users } from "./types";

export const fetchGetUsers = createAsyncThunk(
        'userAdmin/fetchGetUsersStatus',
        async () => {
                const {data} = await axios.get<Users[]>('/User/allUsers');
                return data;
        });

export const fetchDeleteUser = createAsyncThunk<string, Users>(
        'userAdmin/fetchDeleteUsersStatus',
        async (params) => {
                const { id } = params;
                const {data} = await axios.delete(`/User/`, {
                        params: pickBy({
                                id
                        })
                });
                return data;
        });