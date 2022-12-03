import { createAsyncThunk } from "@reduxjs/toolkit";
import { pickBy } from "lodash";
import axios from "../../axios";
import { Film, FilmShortProps } from "../film/types";
import { 
        ActorPayloadParams, 
        CountryPayloadParams, 
        FilmAddParams,  
        GenrePayloadParams, 
        ManagerPayloadParams } from "./types";
        
export const fetchAddFilm = createAsyncThunk<FilmAddParams, FilmAddParams>(
        'filmAdmin/fetchAddFilmStatus',
        async (params) => {
                const { idRating, 
                        nameFilms, 
                        ageLimit,
                        releaseDate,
                        linkFilmPlayer,
                        linkFilmtrailer,
                        countryIds,
                        actorIds,
                        genreIds,
                        stageManagerIds,
                        description,
                        time,
                        pathPoster,
                        imageName } = params;
                const { data } = await axios.post<FilmAddParams>('/Film/addfilm', {
                        idRating, 
                        nameFilms, 
                        ageLimit,
                        releaseDate,
                        linkFilmPlayer,
                        linkFilmtrailer,
                        countryIds,
                        actorIds,
                        genreIds,
                        stageManagerIds,
                        description,
                        time,
                        pathPoster,
                        imageName
                });
                return data;
        });

export const fetchDeleteFilm = createAsyncThunk<string, FilmShortProps>(
        'filmAdmin/fetchDeleteFilmStatus',
        async (params) => {
                const { id } = params;
                const {data} = await axios.delete(`/Film/`, {
                        params: pickBy({
                                id
                        })
                });
                return data;
        });

export const fetchUpload = createAsyncThunk<string, FormData>(
        'filmAdmin/fetchUploadStatus',
        async (formData) => {
                const {data} = await axios.post('/Film/upload', formData);
                return data;
        });

export const fetchGetGenres = createAsyncThunk(
        'filmAdmin/fetchGetGenresStatus',
        async () => {
                const { data } = await axios.get<GenrePayloadParams[]>('/Genre/getAll');
                return data;
        });

export const fetchPostGenre = createAsyncThunk<string, GenrePayloadParams>(
        'filmAdmin/fetchPostGenreStatus',
        async (params) => {
                const { genres } = params;
                const {data} = await axios.post('/Genre/add', {genres});
                return data;
        });

export const fetchDeleteGenre = createAsyncThunk<string, GenrePayloadParams>(
        'filmAdmin/fetchDeleteGenreStatus',
        async (params) => {
                const { id } = params;
                const {data} = await axios.delete(`/Genre/`, {
                        params: pickBy({
                                id
                        })
                });
                return data;
        });

export const fetchGetCountries = createAsyncThunk(
        'filmAdmin/fetchGetCountriesStatus',
        async () => {
                const { data } = await axios.get<CountryPayloadParams[]>('/Country/getAll');
                return data;
        });

export const fetchPostCountries = createAsyncThunk<string, CountryPayloadParams>(
        'filmAdmin/fetchPostCountriesStatus',
        async (params) => {
                const { country } = params;
                const {data} = await axios.post('/Country/add', {country});
                return data;
        });

export const fetchDeleteCountries = createAsyncThunk<string, CountryPayloadParams>(
        'filmAdmin/fetchDeleteCountriesStatus',
        async (params) => {
                const { id } = params;
                const {data} = await axios.delete(`/Country/`, {
                        params: pickBy({
                                id
                        })
                });
                return data;
        });

export const fetchGetManagers = createAsyncThunk(
        'filmAdmin/fetchGetManagersStatus',
        async () => {
                const { data } = await axios.get<ManagerPayloadParams[]>('/StageManager/getAll');
                return data;
        });

export const fetchPostManagers = createAsyncThunk<string, ManagerPayloadParams>(
        'filmAdmin/fetchPostManagersStatus',
        async (params) => {
                const { stageManagers } = params;
                const {data} = await axios.post('/StageManager/add', {stageManagers});
                return data;
        });

export const fetchDeleteManagers = createAsyncThunk<string, ManagerPayloadParams>(
        'filmAdmin/fetchDeleteManagersStatus',
        async (params) => {
                const { id } = params;
                const {data} = await axios.delete(`/StageManager/`, {
                        params: pickBy({
                                id
                        })
                });
                return data;
        });

export const fetchGetActors = createAsyncThunk(
        'filmAdmin/fetchGetActorsStatus',
        async () => {
                const { data } = await axios.get<ActorPayloadParams[]>('/Actor/getAll');
                return data;
        });

export const fetchPostActors = createAsyncThunk<string, ActorPayloadParams>(
        'filmAdmin/fetchPostActorsStatus',
        async (params) => {
                const { firstName, lastName } = params;
                const {data} = await axios.post('/Actor/add', {firstName, lastName});
                return data;
        });

export const fetchDeleteActors = createAsyncThunk<string, ActorPayloadParams>(
        'filmAdmin/fetchDeleteActorsStatus',
        async (params) => {
                const { id } = params;
                const {data} = await axios.delete(`/Actor/`, {
                        params: pickBy({
                                id
                        })
                });
                return data;
        });