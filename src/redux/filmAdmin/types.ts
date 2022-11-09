import { Status } from "../../enum/EnumStatus"

export interface FilmAddState {
    statusFilmAdd: Status,
    statusUpload: Status,
    urlData: string,
    genreData: GenrePayloadParams[],
    countryData: CountryPayloadParams[],
    managerData: ManagerPayloadParams[],
    actorData: ActorPayloadParams[],
}

export interface FilmAddParams {
    nameFilms: string,
    ageLimit: number,
    idRating: number,
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

export interface ActorPayloadParams {
    id: number,
    firstName: string,
    lastName: string,
    secondName: string
}

