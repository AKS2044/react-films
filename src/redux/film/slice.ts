import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchFilmById, fetchFilms } from '../film/asyncActions';
import { Film, FilmSliceState, Status } from '../film/types';

const initialState: FilmSliceState = {
            item: {} as Film,
            items: [],
            status: Status.LOADING
        }

export const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Film[]>) {
            state.items = action.payload;
        },
        setItem(state, action: PayloadAction<Film>) {
            state.item = action.payload;
        },
    },
    
    extraReducers: (builder) => {
        builder.addCase(fetchFilms.pending, (state) => {
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
        builder.addCase(fetchFilmById.pending, (state) => {
            state.status = Status.LOADING
            state.item = {} as Film;
        });
        builder.addCase(fetchFilmById.fulfilled, (state, action) => {
            state.status = Status.SUCCESS;
            state.item = action.payload;
        });
        builder.addCase(fetchFilmById.rejected, (state) => {
            state.status = Status.ERROR;
            state.item = {} as Film;
        });
        },
});

export const { setItems, setItem } = filmSlice.actions

export default filmSlice.reducer