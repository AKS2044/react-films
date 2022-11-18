import { createSlice } from "@reduxjs/toolkit";
import { Status } from '../../enum/EnumStatus';
import { 
    fetchAddFilm, 
    fetchGetCountries, 
    fetchGetGenres, 
    fetchGetManagers, 
    fetchGetActors, 
    fetchUpload, 
    fetchPostGenre, 
    fetchDeleteGenre, 
    fetchPostCountries, 
    fetchDeleteCountries, 
    fetchPostManagers, 
    fetchDeleteManagers, 
    fetchPostActors, 
    fetchDeleteActors, 
    fetchDeleteFilm} from "./asyncActions";
import { FilmAddState} from "./types";


const initialState: FilmAddState = {
    filmAddStatus: Status.LOADING,
    filmDeleteStatus: Status.LOADING,
    statusUpload: Status.LOADING,
    urlData: '',
    genreData: [],
    genrePostStatus: Status.LOADING,
    genreDeleteStatus: Status.LOADING,
    countryData: [],
    countryPostStatus: Status.LOADING,
    countryDeleteStatus: Status.LOADING,
    managerData: [],
    managerPostStatus: Status.LOADING,
    managerDeleteStatus: Status.LOADING,
    actorData: [],
    actorPostStatus: Status.LOADING,
    actorDeleteStatus: Status.LOADING,
}


export const filmAdminSlice = createSlice({
    name: 'filmAdmin',
    initialState,
    reducers: {
    },
    
    extraReducers: (builder) => {
        // fetchAddFilm builder
        builder.addCase(fetchAddFilm.pending, (state) => {
            state.filmAddStatus = Status.LOADING;
        });
        builder.addCase(fetchAddFilm.fulfilled, (state) => {
            state.filmAddStatus = Status.SUCCESS;
        });
        builder.addCase(fetchAddFilm.rejected, (state) => {
            state.filmAddStatus = Status.ERROR;
        });

        // fetchDeleteFilm builder
        builder.addCase(fetchDeleteFilm.pending, (state) => {
            state.filmDeleteStatus = Status.LOADING;
        });
        builder.addCase(fetchDeleteFilm.fulfilled, (state) => {
            state.filmDeleteStatus = Status.SUCCESS;
        });
        builder.addCase(fetchDeleteFilm.rejected, (state) => {
            state.filmDeleteStatus = Status.ERROR;
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

         // fetchPostGenre builder
        builder.addCase(fetchPostGenre.pending, (state) => {
            state.genrePostStatus = Status.LOADING;
        });
        builder.addCase(fetchPostGenre.fulfilled, (state) => {
            state.genrePostStatus = Status.SUCCESS;
        });
        builder.addCase(fetchPostGenre.rejected, (state) => {
            state.genrePostStatus = Status.ERROR;
        });

         // fetchDeleteGenre builder
        builder.addCase(fetchDeleteGenre.pending, (state) => {
            state.genreDeleteStatus = Status.LOADING;
        });
        builder.addCase(fetchDeleteGenre.fulfilled, (state) => {
            state.genreDeleteStatus = Status.SUCCESS;
        });
        builder.addCase(fetchDeleteGenre.rejected, (state) => {
            state.genreDeleteStatus = Status.ERROR;
        });

        // fetchGetCountries builder
        builder.addCase(fetchGetCountries.pending, (state) => {
            state.countryData = [];
        });
        builder.addCase(fetchGetCountries.fulfilled, (state, action) => {
            state.countryData = action.payload;
        });
        builder.addCase(fetchGetCountries.rejected, (state) => {
            state.countryData = [];
        });

         // fetchPostCountries builder
        builder.addCase(fetchPostCountries.pending, (state) => {
            state.countryPostStatus = Status.LOADING;
        });
        builder.addCase(fetchPostCountries.fulfilled, (state) => {
            state.countryPostStatus = Status.SUCCESS;
        });
        builder.addCase(fetchPostCountries.rejected, (state) => {
            state.countryPostStatus = Status.ERROR;
        });

         // fetchDeleteCountries builder
        builder.addCase(fetchDeleteCountries.pending, (state) => {
            state.countryDeleteStatus = Status.LOADING;
        });
        builder.addCase(fetchDeleteCountries.fulfilled, (state) => {
            state.countryDeleteStatus = Status.SUCCESS;
        });
        builder.addCase(fetchDeleteCountries.rejected, (state) => {
            state.countryDeleteStatus = Status.ERROR;
        });

        // fetchGetManagers builder
        builder.addCase(fetchGetManagers.pending, (state) => {
            state.managerData = [];
        });
        builder.addCase(fetchGetManagers.fulfilled, (state, action) => {
            state.managerData = action.payload;
        });
        builder.addCase(fetchGetManagers.rejected, (state) => {
            state.managerData = [];
        });

         // fetchPostManagers builder
        builder.addCase(fetchPostManagers.pending, (state) => {
            state.managerPostStatus = Status.LOADING;
        });
        builder.addCase(fetchPostManagers.fulfilled, (state) => {
            state.managerPostStatus = Status.SUCCESS;
        });
        builder.addCase(fetchPostManagers.rejected, (state) => {
            state.managerPostStatus = Status.ERROR;
        });

         // fetchDeleteManagers builder
        builder.addCase(fetchDeleteManagers.pending, (state) => {
            state.managerDeleteStatus = Status.LOADING;
        });
        builder.addCase(fetchDeleteManagers.fulfilled, (state) => {
            state.managerDeleteStatus = Status.SUCCESS;
        });
        builder.addCase(fetchDeleteManagers.rejected, (state) => {
            state.managerDeleteStatus = Status.ERROR;
        });

        // fetchGetActors builder
        builder.addCase(fetchGetActors.pending, (state) => {
            state.actorData = [];
        });
        builder.addCase(fetchGetActors.fulfilled, (state, action) => {
            state.actorData = action.payload;
        });
        builder.addCase(fetchGetActors.rejected, (state) => {
            state.actorData = [];
        });

         // fetchPostActors builder
        builder.addCase(fetchPostActors.pending, (state) => {
            state.actorPostStatus = Status.LOADING;
        });
        builder.addCase(fetchPostActors.fulfilled, (state) => {
            state.actorPostStatus = Status.SUCCESS;
        });
        builder.addCase(fetchPostActors.rejected, (state) => {
            state.actorPostStatus = Status.ERROR;
        });

         // fetchDeleteActors builder
        builder.addCase(fetchDeleteActors.pending, (state) => {
            state.actorDeleteStatus = Status.LOADING;
        });
        builder.addCase(fetchDeleteActors.fulfilled, (state) => {
            state.actorDeleteStatus = Status.SUCCESS;
        });
        builder.addCase(fetchDeleteActors.rejected, (state) => {
            state.actorDeleteStatus = Status.ERROR;
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