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
    actors: [''],
    description : string,
    time : number,
    pathPoster : string ,
    imageName : string,
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}

export interface FilmSliceState {
        item: Film;
        items: Film[];
        status: Status;
}

export interface FilmParams {
    id: number
}