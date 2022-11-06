import { Status } from "../../enum/EnumStatus"

export interface FilmAddState {
    statusFilmAdd: Status,
    genreData: GenrePayloadParams[],
    countryData: CountryPayloadParams[],
    managerData: ManagerPayloadParams[],
}

export interface FilmAddParams {
    id: number,
    nameFilms: string,
    ageLimit: number,
    idRating: number,
    ratingSite: number,
    releaseDate: number,
    linkFilmPlayer: string,
    linkFilmtrailer: string,
    countryIds: number[],
    actorIds: number[],
    genreIds: number[],
    stageManagerIds: number[],
    description: string,
    time: number,
    pathPoster: string,
    imageName: string
}

export interface FilmAddPayloadParams {
    email: string,
    roles: [],
    token: boolean,
    userName: string
}

export interface GenrePayloadParams {
    id: number,
    genres: string
}

export interface CountryPayloadParams {
    id: number,
    country: string
}

export interface ManagerPayloadParams {
    id: number,
    stageManagers: string
}

