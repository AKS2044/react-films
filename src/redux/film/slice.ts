import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../../enum/EnumStatus';
import { 
    fetchFilmById, 
    fetchFilms, 
    fetchSliderFilms, 
    fetchAddFavouriteFilm, 
    fetchGetFavouriteFilm,
    fetchDeleteFavouriteFilm, 
    fetchAddWatchLaterFilm,
    fetchGetWatchLaterFilm,
    fetchDeleteWatchLaterFilm,
    fetchSetRatingFilm,
    fetchAddCommentFilm,
    fetchGetCommentsFilm,
    fetchDeleteCommentFilm,
    fetchSetLikeCommentFilm,
    fetchSetDislikeCommentFilm} from '../film/asyncActions';
import { Film, FilmSliceState} from '../film/types';

const initialState: FilmSliceState = {
            film: {} as Film,
            filmStatus: Status.LOADING,
            films: [],
            filmsStatus: Status.LOADING,
            sliderFilms: [],
            sliderFilmsStatus: Status.LOADING,
            filmFavourite: [],
            addFavouriteStatus: Status.LOADING,
            getFavouriteStatus: Status.LOADING,
            deleteFavouriteStatus: Status.LOADING,
            filmWatchLater: [],
            addWatchLaterStatus: Status.LOADING,
            getWatchLaterStatus: Status.LOADING,
            deleteWatchLaterStatus: Status.LOADING,
            setRatingStatus: Status.LOADING,
            commentsData: [],
            addCommentStatus: Status.LOADING,
            getAllCommentsStatus: Status.LOADING,
            deleteCommentStatus: Status.LOADING,
            setLikeCommentStatus: Status.LOADING,
            setDislikeCommentStatus: Status.LOADING,
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
        });
        builder.addCase(fetchFilms.fulfilled, (state, action) => {
            state.filmsStatus = Status.SUCCESS;
            state.films = action.payload;
        });
        builder.addCase(fetchFilms.rejected, (state) => {
            state.filmsStatus = Status.ERROR;
        });

        //fetchFilmById builder
        builder.addCase(fetchFilmById.pending, (state) => {
            state.filmStatus = Status.LOADING
        });
        builder.addCase(fetchFilmById.fulfilled, (state, action) => {
            state.filmStatus = Status.SUCCESS;
            state.film = action.payload;
        });
        builder.addCase(fetchFilmById.rejected, (state) => {
            state.filmStatus = Status.ERROR;
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

        //fetchAddFavouriteFilm builder
        builder.addCase(fetchAddFavouriteFilm.pending, (state) => {
            state.addFavouriteStatus = Status.LOADING;
        });
        builder.addCase(fetchAddFavouriteFilm.fulfilled, (state) => {
            state.addFavouriteStatus = Status.SUCCESS;
        });
        builder.addCase(fetchAddFavouriteFilm.rejected, (state) => {
            state.addFavouriteStatus = Status.ERROR;
        });

        //fetchGetFavouriteFilm builder
        builder.addCase(fetchGetFavouriteFilm.pending, (state) => {
            state.getFavouriteStatus = Status.LOADING;
        });
        builder.addCase(fetchGetFavouriteFilm.fulfilled, (state, action) => {
            state.getFavouriteStatus = Status.SUCCESS;
            state.filmFavourite = action.payload;
        });
        builder.addCase(fetchGetFavouriteFilm.rejected, (state) => {
            state.getFavouriteStatus = Status.ERROR;
        });

        //fetchDeleteFavouriteFilm builder
        builder.addCase(fetchDeleteFavouriteFilm.pending, (state) => {
            state.deleteFavouriteStatus = Status.LOADING;
        });
        builder.addCase(fetchDeleteFavouriteFilm.fulfilled, (state) => {
            state.deleteFavouriteStatus = Status.SUCCESS;
        });
        builder.addCase(fetchDeleteFavouriteFilm.rejected, (state) => {
            state.deleteFavouriteStatus = Status.ERROR;
        });

         //fetchAddWatchLaterFilm builder
        builder.addCase(fetchAddWatchLaterFilm.pending, (state) => {
            state.addWatchLaterStatus = Status.LOADING;
        });
        builder.addCase(fetchAddWatchLaterFilm.fulfilled, (state) => {
            state.addWatchLaterStatus = Status.SUCCESS;
        });
        builder.addCase(fetchAddWatchLaterFilm.rejected, (state) => {
            state.addWatchLaterStatus = Status.ERROR;
        });

        //fetchGetWatchLaterFilm builder
        builder.addCase(fetchGetWatchLaterFilm.pending, (state) => {
            state.getWatchLaterStatus = Status.LOADING;
        });
        builder.addCase(fetchGetWatchLaterFilm.fulfilled, (state, action) => {
            state.getWatchLaterStatus = Status.SUCCESS;
            state.filmWatchLater = action.payload;
        });
        builder.addCase(fetchGetWatchLaterFilm.rejected, (state) => {
            state.getWatchLaterStatus = Status.ERROR;
        });

        //fetchDeleteWatchLaterFilm builder
        builder.addCase(fetchDeleteWatchLaterFilm.pending, (state) => {
            state.deleteWatchLaterStatus = Status.LOADING;
        });
        builder.addCase(fetchDeleteWatchLaterFilm.fulfilled, (state) => {
            state.deleteWatchLaterStatus = Status.SUCCESS;
        });
        builder.addCase(fetchDeleteWatchLaterFilm.rejected, (state) => {
            state.deleteWatchLaterStatus = Status.ERROR;
        });

        //fetchSetRatingFilm builder
        builder.addCase(fetchSetRatingFilm.pending, (state) => {
            state.setRatingStatus = Status.LOADING;
        });
        builder.addCase(fetchSetRatingFilm.fulfilled, (state) => {
            state.setRatingStatus = Status.SUCCESS;
        });
        builder.addCase(fetchSetRatingFilm.rejected, (state) => {
            state.setRatingStatus = Status.ERROR;
        });

        //fetchAddCommentFilm builder
        builder.addCase(fetchAddCommentFilm.pending, (state) => {
            state.addCommentStatus = Status.LOADING;
        });
        builder.addCase(fetchAddCommentFilm.fulfilled, (state) => {
            state.addCommentStatus = Status.SUCCESS;
        });
        builder.addCase(fetchAddCommentFilm.rejected, (state) => {
            state.addCommentStatus = Status.ERROR;
        });

        //fetchGetCommentsFilm builder
        builder.addCase(fetchGetCommentsFilm.pending, (state) => {
            state.getAllCommentsStatus = Status.LOADING;
        });
        builder.addCase(fetchGetCommentsFilm.fulfilled, (state, action) => {
            state.getAllCommentsStatus = Status.SUCCESS;
            state.commentsData = action.payload;
        });
        builder.addCase(fetchGetCommentsFilm.rejected, (state) => {
            state.getAllCommentsStatus = Status.ERROR;
        });

        //fetchDeleteCommentFilm builder
        builder.addCase(fetchDeleteCommentFilm.pending, (state) => {
            state.deleteCommentStatus = Status.LOADING;
        });
        builder.addCase(fetchDeleteCommentFilm.fulfilled, (state) => {
            state.deleteCommentStatus = Status.SUCCESS;
        });
        builder.addCase(fetchDeleteCommentFilm.rejected, (state) => {
            state.deleteCommentStatus = Status.ERROR;
        });

        //fetchSetLikeCommentFilm builder
        builder.addCase(fetchSetLikeCommentFilm.pending, (state) => {
            state.setLikeCommentStatus = Status.LOADING;
        });
        builder.addCase(fetchSetLikeCommentFilm.fulfilled, (state) => {
            state.setLikeCommentStatus = Status.SUCCESS;
        });
        builder.addCase(fetchSetLikeCommentFilm.rejected, (state) => {
            state.setLikeCommentStatus = Status.ERROR;
        });

         //fetchSetDislikeCommentFilm builder
        builder.addCase(fetchSetDislikeCommentFilm.pending, (state) => {
            state.setDislikeCommentStatus = Status.LOADING;
        });
        builder.addCase(fetchSetDislikeCommentFilm.fulfilled, (state) => {
            state.setDislikeCommentStatus = Status.SUCCESS;
        });
        builder.addCase(fetchSetDislikeCommentFilm.rejected, (state) => {
            state.setDislikeCommentStatus = Status.ERROR;
        });
        },
});

export const { } = filmSlice.actions

export default filmSlice.reducer