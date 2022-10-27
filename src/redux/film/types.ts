export interface Films {
    id : number,
    idRating : number,
    nameFilms :  string ,
    ageLimit : number,
    releaseDate : number,
    description : string,
    time : number,
    pathPoster : string ,
    imageName : string,
    ratingSite : number,
    ratingKinopoisk : string,
    ratingImdb : string,
    linkFilmPlayer : string,
    linkFilmtrailer : string
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}

export interface FilmSliceState {
    items: Films[];
    status: Status;
}

export interface FilmParams {
    id: number
}