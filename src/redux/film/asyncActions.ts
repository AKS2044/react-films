import { createAsyncThunk } from '@reduxjs/toolkit';
import {pickBy} from 'lodash';
import axios from 'axios';
import { Films, FilmParams } from './types';

export const fetchFilms = createAsyncThunk<Films[]>(
    'film/fetchFilmsStatus',
    async () => {
        const { data } = await axios.get<Films[]>('https://localhost:44369/api/Film/allFilms');
        return data;
    });

    export const fetchFilmById = createAsyncThunk<Films, FilmParams>(
        'film/fetchFilmsStatus',
        async (params) => {
            const {id} = params;
            const { data } = await axios.get<Films>(`https://localhost:44369/api/Film/`, {
                params: pickBy({
                    id
                })
            });
            console.log(data)
            return data;
        });