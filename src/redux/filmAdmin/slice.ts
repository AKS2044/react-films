import { createSlice } from "@reduxjs/toolkit";
import { Status } from '../../enum/EnumStatus';
import { fetchAddFilm, fetchGetCountry, fetchGetGenre, fetchGetManager } from "./asyncActions";
import { FilmAddState, GenrePayloadParams} from "./types";


const initialState: FilmAddState = {
    statusFilmAdd: Status.LOADING,
    genreData:  [],
    countryData: [],
    managerData: [],
}


export const filmAdminSlice = createSlice({
    name: 'filmAdmin',
    initialState,
    reducers: {
        addGenreData: (state, action) => {
            
            console.log(state.genreData)
            state.genreData = action.payload;
            console.log(state.genreData, 'after')
        },
    },
    
    extraReducers: (builder) => {
        // fetchAddFilm builder
        builder.addCase(fetchAddFilm.pending, (state) => {
            state.statusFilmAdd = Status.LOADING;
        });
        builder.addCase(fetchAddFilm.fulfilled, (state) => {
            state.statusFilmAdd = Status.SUCCESS;
        });
        builder.addCase(fetchAddFilm.rejected, (state) => {
            state.statusFilmAdd = Status.ERROR;
        });

        // fetchGetGenre builder
        builder.addCase(fetchGetGenre.pending, (state) => {
            state.genreData = [];
        });
        builder.addCase(fetchGetGenre.fulfilled, (state, action) => {
            state.genreData = action.payload;
        });
        builder.addCase(fetchGetGenre.rejected, (state) => {
            state.genreData = [];
        });

        // fetchGetCountry builder
        builder.addCase(fetchGetCountry.pending, (state) => {
            state.countryData = [];
        });
        builder.addCase(fetchGetCountry.fulfilled, (state, action) => {
            state.countryData = action.payload;
        });
        builder.addCase(fetchGetCountry.rejected, (state) => {
            state.countryData = [];
        });

        // fetchGetManager builder
        builder.addCase(fetchGetManager.pending, (state) => {
            state.managerData = [];
        });
        builder.addCase(fetchGetManager.fulfilled, (state, action) => {
            state.managerData = action.payload;
        });
        builder.addCase(fetchGetManager.rejected, (state) => {
            state.managerData = [];
        });
        },
})
export const { addGenreData } = filmAdminSlice.actions

export default filmAdminSlice.reducer