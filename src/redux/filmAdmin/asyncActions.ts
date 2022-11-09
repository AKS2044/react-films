import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import { 
        ActorPayloadParams, 
        CountryPayloadParams, 
        FilmAddParams, 
        FilmAddPayloadParams, 
        GenrePayloadParams, 
        ManagerPayloadParams } from "./types";
        
export const fetchAddFilm = createAsyncThunk<FilmAddPayloadParams, FilmAddParams>(
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
                        console.log(params)
                const { data } = await axios.post<FilmAddPayloadParams>('/Film/addfilm', {
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

export const fetchUpload = createAsyncThunk<string, FormData>(
        'filmAdmin/fetchUploadStatus',
        async (formData) => {
                const {data} = await axios.post('/Film/upload', formData);

                return data;
        });

export const fetchGetGenres = createAsyncThunk(
        'filmAdmin/fetchGetGenresStatus',
        async () => {
                const { data } = await axios.get<GenrePayloadParams[]>('/Genre/allGenre');

                return data;
        });

export const fetchGetCountries = createAsyncThunk(
        'filmAdmin/fetchGetCountriesStatus',
        async () => {
                const { data } = await axios.get<CountryPayloadParams[]>('/Country/allCountry');

                return data;
        });

export const fetchGetManagers = createAsyncThunk(
        'filmAdmin/fetchGetManagersStatus',
        async () => {
                const { data } = await axios.get<ManagerPayloadParams[]>('/StageManager/allStageManager');
                
                return data;
        });

export const fetchGetActors = createAsyncThunk(
        'filmAdmin/fetchGetActorsStatus',
        async () => {
                const { data } = await axios.get<ActorPayloadParams[]>('/Actor/allActor');
                
                return data;
        });

