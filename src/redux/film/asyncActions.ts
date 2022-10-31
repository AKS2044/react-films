import { createAsyncThunk } from '@reduxjs/toolkit';
import {pickBy} from 'lodash';
import axios from 'axios';
import { Film, FilmParams } from './types';

export const fetchFilms = createAsyncThunk<Film[]>(
    'film/fetchFilmsStatus',
    async () => {
        const { data } = await axios.get<Film[]>('https://localhost:44369/api/Film/allFilms');
        return data;
    });

    export const fetchFilmById = createAsyncThunk<Film, FilmParams>(
        'film/fetchFilmByIdStatus',
        async (params) => {
            const {id} = params;
            const { data } = await axios.get<Film>(`https://localhost:44369/api/Film/`, {
                params: pickBy({
                    id
                })
            });
            return data;
        });