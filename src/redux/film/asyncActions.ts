import { createAsyncThunk } from '@reduxjs/toolkit';
import {pickBy} from 'lodash';
import axios from '../../axios';
import { FavouriteFilmParams, Film, FilmParams, FilmRatingParams, FilmShortProps } from './types';

export const fetchFilms = createAsyncThunk<FilmShortProps[], FilmParams>(
    'film/fetchFilmsStatus',
    async (params) => {
        const { currentPage, genreId } = params;
        const { data } = await axios.get<FilmShortProps[]>('/Film/Films', {
            params: pickBy({
                page: currentPage,
                genreId: genreId
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

export const fetchSliderFilms = createAsyncThunk<Film[]>(
    'film/fetchSliderFilmsStatus',
    async () => {
        const { data } = await axios.get<Film[]>('/Film/slider');
        return data;
    });

export const fetchAddFavouriteFilm = createAsyncThunk<string, FavouriteFilmParams>(
    'film/fetchAddFavouriteFilmStatus',
    async (params) => {
        const { data } = await axios.post('/Film/AddFavouriteFilm', params);
        return data;
    });

export const fetchGetFavouriteFilm = createAsyncThunk<FilmShortProps[]>(
    'film/fetchGetFavouriteFilmStatus',
    async () => {
        const { data } = await axios.get<FilmShortProps[]>('/Film/GetAllFavouriteFilm');
        return data;
    });

export const fetchDeleteFavouriteFilm = createAsyncThunk<string, FavouriteFilmParams>(
    'film/fetchDeleteFavouriteFilmStatus',
    async (params) => {
        const {filmId} = params;
        const { data } = await axios.delete('/Film/DeleteFavouriteFilm', {
            params: pickBy({
                filmId
            })
        });
        return data;
    });

export const fetchAddWatchLaterFilm = createAsyncThunk<string, FavouriteFilmParams>(
    'film/fetchAddWatchLaterFilmStatus',
    async (params) => {
        const { data } = await axios.post('/Film/AddWatchLaterFilm', params);
        return data;
    });

export const fetchGetWatchLaterFilm = createAsyncThunk<FilmShortProps[]>(
    'film/fetchGetWatchLaterFilmStatus',
    async () => {
        const { data } = await axios.get<FilmShortProps[]>('/Film/GetAllWatchLaterFilm');
        return data;
    });

export const fetchDeleteWatchLaterFilm = createAsyncThunk<string, FavouriteFilmParams>(
    'film/fetchDeleteWatchLaterFilmStatus',
    async (params) => {
        const {filmId} = params;
        const { data } = await axios.delete('/Film/DeleteWatchLaterFilm', {
            params: pickBy({
                filmId
            })
        });
        return data;
    });

export const fetchSetRatingFilm = createAsyncThunk<string, FilmRatingParams>(
    'film/fetchSetRatingFilmStatus',
    async (params) => {
        const { data } = await axios.post('/Film/rating', params);
        return data;
    });