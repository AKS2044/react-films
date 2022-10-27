import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios';
export interface Films {
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

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}

export interface FilmSliceState {
    items: Films[];
    status: Status;
}

const initialState: FilmSliceState = {
    items: [],
    status: Status.LOADING
}

export const fetchFilms = createAsyncThunk<Films[]>(
    'pizza/fetchFilmsStatus',
    async () => {
        const { data } = await axios.get<Films[]>('https://localhost:44369/api/Film/allFilms');
        return data;
    });

export const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Films[]>) {
            state.items = action.payload;
        },
    },
    
    extraReducers: (builder) => {
        builder.addCase(fetchFilms.pending, (state) => {
            console.log('dsd')
            state.status = Status.LOADING
            state.items = [];
        });
        builder.addCase(fetchFilms.fulfilled, (state, action) => {
            state.status = Status.SUCCESS;
            state.items = action.payload;
        });
        builder.addCase(fetchFilms.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
        });
        },
});

export const { setItems } = filmSlice.actions

export default filmSlice.reducer