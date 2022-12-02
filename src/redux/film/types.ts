import { Status } from '../../enum/EnumStatus';
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
    country: [''],
    genre: [''],
    stageManagers: [''],
    actors: {id: number,
    filmActors: string | null,
    firstName: string,
    lastName: string,
    secondName: string | null}[],
    description : string,
    time : number,
    pathPoster : string ,
    imageName : string,
}

export interface FilmSliceState {
        film: Film;
        filmStatus: Status;
        films: Film[];
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
}

export interface FilmParams {
    id?: number,
    currentPage?: number
}

export interface FavouriteFilmParams {
    id?: string,
    filmId: number
}

export interface FilmShortProps {
    id: number,
    pathPoster: string,
    nameFilms: string,
    releaseDate: number
}