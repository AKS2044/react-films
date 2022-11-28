import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../../enum/EnumStatus';
import { fetchFilmById, fetchFilms, fetchSliderFilms } from '../film/asyncActions';
import { Film, FilmSliceState} from '../film/types';

const initialState: FilmSliceState = {
            film: {} as Film,
            filmStatus: Status.LOADING,
            films: [],
            filmsStatus: Status.LOADING,
            sliderFilms: [],
            sliderFilmsStatus: Status.LOADING
        }

export const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
    },
    
    extraReducers: (builder) => {
        //fetchFilms builder
        builder.addCase(fetchFilms.pending, (state) => {
            state.filmsStatus = Status.LOADING
            state.films = [];
        });
        builder.addCase(fetchFilms.fulfilled, (state, action) => {
            state.filmsStatus = Status.SUCCESS;
            state.films = action.payload;
        });
        builder.addCase(fetchFilms.rejected, (state) => {
            state.filmsStatus = Status.ERROR;
            state.films = [];
        });

        //fetchFilmById builder
        builder.addCase(fetchFilmById.pending, (state) => {
            state.filmStatus = Status.LOADING
            state.film = {} as Film;
        });
        builder.addCase(fetchFilmById.fulfilled, (state, action) => {
            state.filmStatus = Status.SUCCESS;
            state.film = action.payload;
        });
        builder.addCase(fetchFilmById.rejected, (state) => {
            state.filmStatus = Status.ERROR;
            state.film = {} as Film;
        });

        //fetchSliderFilms builder
        builder.addCase(fetchSliderFilms.pending, (state) => {
            state.sliderFilmsStatus = Status.LOADING;
        });
        builder.addCase(fetchSliderFilms.fulfilled, (state, action) => {
            state.sliderFilmsStatus = Status.SUCCESS;
            state.sliderFilms = action.payload;
        });
        builder.addCase(fetchSliderFilms.rejected, (state) => {
            state.sliderFilmsStatus = Status.ERROR;
        });
        },
});

export const { } = filmSlice.actions

export default filmSlice.reducer