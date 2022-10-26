import { createSlice } from '@reduxjs/toolkit'
import type { createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios';
export interface FilmState {
    id : number,
    idRating : number,
    nameFilms :  string ,
    ageLimit : number,
    releaseDate : number,
    description : string,
    time : number,
    pathPoster : string ,
    imageName : string,
    ratingSite : number,
    ratingKinopoisk : string,
    ratingImdb : string,
    linkFilmPlayer : string,
    linkFilmtrailer : string
}

export const fetchPizzas = createAsyncThunk<FilmState[]>(
    'pizza/fetchPizzasStatus',
    async () => {
        const { data } = await axios.get<FilmState[]>('https://626d16545267c14d5677d9c2.mockapi.io/items');
        return data;
    },
);

const initialState: FilmState = {
    id : 0,
    idRating : 0,
    nameFilms :  '' ,
    ageLimit : 0,
    releaseDate : 0,
    description : '',
    time : 0,
    pathPoster : '' ,
    imageName : '',
    ratingSite : 0,
    ratingKinopoisk : '',
    ratingImdb : '',
    linkFilmPlayer : '',
    linkFilmtrailer : ''
}

export const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
    },
})

export const { } = filmSlice.actions

export default filmSlice.reducer