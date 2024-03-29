import { Status } from '../../enum/EnumStatus';
import { ActorPayloadParams, CountryPayloadParams, GenrePayloadParams, ManagerPayloadParams } from '../filmAdmin/types';
export interface Film {
    id : number,
    nameFilms :  string ,
    ageLimit : number,
    ratingKinopoisk : string,
    ratingSite : number,
    ratingImdb : string,
    releaseDate : number,
    linkFilmPlayer : string,
    linkFilmtrailer : string,
    country: CountryPayloadParams[],
    genre: GenrePayloadParams[],
    stageManagers: ManagerPayloadParams[],
    actors: ActorPayloadParams[],
    description : string,
    time : number,
    pathPoster : string ,
    imageName : string,
}

export interface FilmSliceState {
        film: Film;
        filmStatus: Status;
        films: FilmShortProps[];
        filmsStatus: Status;
        sliderFilms: Film[];
        sliderFilmsStatus: Status;
        filmFavourite: FilmShortProps[],
        addFavouriteStatus: Status;
        getFavouriteStatus: Status;
        deleteFavouriteStatus: Status;
        filmWatchLater: FilmShortProps[],
        addWatchLaterStatus: Status,
        getWatchLaterStatus: Status,
        deleteWatchLaterStatus: Status,
        setRatingStatus: Status,
        commentsData: CommentGetParams[],
        addCommentStatus: Status,
        getAllCommentsStatus: Status,
        deleteCommentStatus: Status,
        setLikeCommentStatus: Status,
        setDislikeCommentStatus: Status,
}

export interface FilmParams {
    id?: number,
    search?: string,
    currentPage?: number,
    genreId?: number,
    countryId?: number
}

export interface CommentAddParams {
    comments: string,
    userName: string,
    pathPhoto: string,
    filmId: number,
    userId: string
}

export interface CommentGetParams {
    id: number,
    comments: string,
    userName: string,
    pathPhoto: string,
    dateSet: string,
    like: number,
    dislike: number
}

export interface FavouriteFilmParams {
    id?: string,
    filmId: number
}

export interface FilmShortProps {
    id: number,
    pathPoster: string,
    nameFilms: string,
    releaseDate: number,
    ratingSite: number,
}

export interface FilmRatingParams {
    filmId: number,
    userName: string,
    rating: number
}