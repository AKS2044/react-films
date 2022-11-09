import { createSlice } from "@reduxjs/toolkit";
import { Status } from '../../enum/EnumStatus';
import { fetchAddFilm, fetchGetCountries, fetchGetGenres, fetchGetManagers, fetchGetActors, fetchUpload } from "./asyncActions";
import { FilmAddState} from "./types";


const initialState: FilmAddState = {
    statusFilmAdd: Status.LOADING,
    statusUpload: Status.LOADING,
    urlData: '',
    genreData:  [],
    countryData: [],
    managerData: [],
    actorData: [],
}


export const filmAdminSlice = createSlice({
    name: 'filmAdmin',
    initialState,
    reducers: {
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
        builder.addCase(fetchGetGenres.pending, (state) => {
            state.genreData = [];
        });
        builder.addCase(fetchGetGenres.fulfilled, (state, action) => {
            state.genreData = action.payload;
        });
        builder.addCase(fetchGetGenres.rejected, (state) => {
            state.genreData = [];
        });

        // fetchGetCountry builder
        builder.addCase(fetchGetCountries.pending, (state) => {
            state.countryData = [];
        });
        builder.addCase(fetchGetCountries.fulfilled, (state, action) => {
            state.countryData = action.payload;
        });
        builder.addCase(fetchGetCountries.rejected, (state) => {
            state.countryData = [];
        });

        // fetchGetManager builder
        builder.addCase(fetchGetManagers.pending, (state) => {
            state.managerData = [];
        });
        builder.addCase(fetchGetManagers.fulfilled, (state, action) => {
            state.managerData = action.payload;
        });
        builder.addCase(fetchGetManagers.rejected, (state) => {
            state.managerData = [];
        });

        // fetchGetManager builder
        builder.addCase(fetchGetActors.pending, (state) => {
            state.actorData = [];
        });
        builder.addCase(fetchGetActors.fulfilled, (state, action) => {
            state.actorData = action.payload;
        });
        builder.addCase(fetchGetActors.rejected, (state) => {
            state.actorData = [];
        });

        // fetchUpload builder
        builder.addCase(fetchUpload.pending, (state) => {
            state.statusUpload = Status.LOADING;
        });
        builder.addCase(fetchUpload.fulfilled, (state, action) => {
            state.statusUpload = Status.SUCCESS;
            state.urlData = action.payload;
        });
        builder.addCase(fetchUpload.rejected, (state) => {
            state.statusUpload = Status.ERROR;
        });
        },
})
export const {  } = filmAdminSlice.actions

export default filmAdminSlice.reducer