import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState } from './types';

const initialState: FilterSliceState = {
    search: '',
    currentPage: 1,
    genreId: 0, 
    countryId: 0, 
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
        setCountry(state, action: PayloadAction<number>) {
            state.countryId = action.payload; 
            },
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload; 
            },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
                if(action.payload.genreId || action.payload.genreId === 0) state.genreId = action.payload.genreId;
                if(action.payload.currentPage || action.payload.currentPage === 0) state.currentPage = action.payload.currentPage;
                if(action.payload.countryId || action.payload.countryId === 0) state.countryId = action.payload.countryId;
                if(action.payload.search || action.payload.search?.length) state.search = action.payload.search;
        }
    },
});

export const { setCurrentPage, setGenre, setFilters, setCountry, setSearch } =
    filterSlice.actions;

export default filterSlice.reducer;