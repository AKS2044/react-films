import { createAsyncThunk } from '@reduxjs/toolkit';
import {pickBy} from 'lodash';
import axios from '../../axios';
import { Film, FilmParams } from './types';

export const fetchFilms = createAsyncThunk<Film[], FilmParams>(
    'film/fetchFilmsStatus',
    async (params) => {
        const { currentPage } = params;
        const { data } = await axios.get<Film[]>('/Film/Films', {
            params: pickBy({
                page: currentPage
            })
        });
        return data;
    });

    export const fetchFilmById = createAsyncThunk<Film, FilmParams>(
        'film/fetchFilmByIdStatus',
        async (params) => {
            const {id} = params;
            const { data } = await axios.get<Film>(`/Film/`, {
                params: pickBy({
                    id
                })
            });
            return data;
        });