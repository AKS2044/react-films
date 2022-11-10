import { Status } from "../../enum/EnumStatus"

export interface FilmAddState {
    filmAddStatus: Status,
    filmDeleteStatus: Status,
    statusUpload: Status,
    urlData: string,
    genreData: GenrePayloadParams[],
    genrePostStatus: Status,
    genreDeleteStatus: Status,
    countryData: CountryPayloadParams[],
    countryPostStatus: Status,
    countryDeleteStatus: Status,
    managerData: ManagerPayloadParams[],
    managerPostStatus: Status,
    managerDeleteStatus: Status,
    actorData: ActorPayloadParams[],
    actorPostStatus: Status,
    actorDeleteStatus: Status,
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

