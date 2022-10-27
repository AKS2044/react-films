import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchFilms } from '../film/asyncActions';
import { Films, FilmSliceState, Status } from '../film/types';

const initialState: FilmSliceState = {
    items: [],
    status: Status.LOADING
}

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