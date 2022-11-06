import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";
import { CountryPayloadParams, FilmAddParams, FilmAddPayloadParams, GenrePayloadParams, ManagerPayloadParams } from "./types";

export const fetchAddFilm = createAsyncThunk<FilmAddPayloadParams, FilmAddParams>(
        'filmAdmin/fetchAddFilmStatus',
        async (params) => {
                const { id, 
                        idRating, 
                        nameFilms, 
                        ageLimit,
                        ratingSite,
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
                const { data } = await axios.post<FilmAddPayloadParams>('/Film/addfilm', {
                        id, 
                        idRating, 
                        nameFilms, 
                        ageLimit,
                        ratingSite,
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

export const fetchGetGenre = createAsyncThunk(
        'filmAdmin/fetchGetGenreStatus',
        async () => {
                const { data } = await axios.get<GenrePayloadParams[]>('/Genre/allGenre');

                return data;
        });

export const fetchGetCountry = createAsyncThunk(
        'filmAdmin/fetchGetCountryStatus',
        async () => {
                const { data } = await axios.get<CountryPayloadParams[]>('/Country/allCountry');

                return data;
        });

export const fetchGetManager = createAsyncThunk(
        'filmAdmin/fetchGetManagerStatus',
        async () => {
                const { data } = await axios.get<ManagerPayloadParams[]>('/StageManager/allStageManager');
                
                return data;
        });