import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState } from './types';

const initialState: FilterSliceState = {
    currentPage: 1,
    genreId: 0, 
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
        state.currentPage = action.payload;
        },
        setGenre(state, action: PayloadAction<number>) {
            state.genreId = action.payload; 
            },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            if (Object.keys(action.payload).length) {
                state.currentPage = Number(action.payload.currentPage);
                state.genreId = action.payload.genreId;
            } else {
                state.currentPage = 1;
                };
        }
    },
});

export const { setCurrentPage, setGenre, setFilters } =
    filterSlice.actions;

export default filterSlice.reducer;