import { TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFilmById } from "../../redux/film/asyncActions";
import { selectFilmData } from "../../redux/film/selectors";
import { selectFilmAdminData } from "../../redux/filmAdmin/selectors";
import { ActorPayloadParams, CountryPayloadParams, FilmUpgradeParams, GenrePayloadParams, ManagerPayloadParams } from "../../redux/filmAdmin/types";
import { useAppDispatch } from "../../redux/store";
import cl from "./UpgradeFilm.module.scss";

const defaultValues: FilmUpgradeParams = {
    nameFilms: '',
    ageLimit: 0,
    idRating: 0,
    releaseDate: 0,
    linkFilmPlayer: '',
    linkFilmtrailer: '',
    countries: [],
    actors: [],
    genres: [],
    stageManagers: [],
    description: '',
    time: 0,
    pathPoster: '',
    imageName: ''
}
const UpgradeFilm = () => {
    const dispatch = useAppDispatch();
    const { film, filmStatus } = useSelector(selectFilmData);

    const [valueGenre, setValueGenre] = useState('');
    const [valueСountry, setValueСountry] = useState('');
    const [valueManager, setValueManager] = useState('');
    const [valueActor, setValueActor] = useState('');
    useEffect(() => {
        
        getFilm();
    }, []);
    const params = useParams();
    const { 
        register, 
        handleSubmit, 
        formState: {errors}} = useForm({
        defaultValues,
        mode: 'onChange'
    });

    const [genresPut, setGenresPut] = useState<GenrePayloadParams[]>([]);
    const [countryPut, setCountryPut] = useState<CountryPayloadParams[]>([]);
    const [managerPut, setManagerPut] = useState<ManagerPayloadParams[]>([]);
    const [actorPut, setActorPut] = useState<ActorPayloadParams[]>([]);

    const genreRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLInputElement>(null);
    const actorRef = useRef<HTMLInputElement>(null);
    const managerRef = useRef<HTMLInputElement>(null);
    const inputFileRef = useRef<HTMLInputElement>(null);

    const { 
        filmAddStatus, 
        genreData, 
        countryData, 
        managerData,
        actorData,
        urlData } = useSelector(selectFilmAdminData);

    const getFilm = async () => {
        await dispatch(fetchFilmById({id: Number(params.id)}));
    }

    useEffect(() => {
        //setGenresPut(film.genre.);
        getFilm();
    }, []);
    console.log(genreData, 'data')
    console.log(film.genre, 'data film')

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, set: React.Dispatch<React.SetStateAction<string>>) => {
        set(event.target.value);
    };

    const onClickClear = (inputRef: React.RefObject<HTMLInputElement>, setProps: React.Dispatch<React.SetStateAction<string>>) => {
        setProps('');
        inputRef.current?.focus();
    };

    const onClickDelete = (id: number, setDelete: Function, sds: {id: number}[]) => {
        setDelete(sds.filter(obj => obj.id !== id));
    };

    const getGenres = genreData.filter(obj => {
        if(obj.genres.toLowerCase().includes(valueGenre.toLowerCase())){
            return true;
        }
        return false;
    });

    const getCountries = countryData.filter(obj => {
        if(obj.country.toLowerCase().includes(valueСountry.toLowerCase())){
            return true;
        }
        return false;
    });

    const getManagers = managerData.filter(obj => {
        if(obj.stageManagers.toLowerCase().includes(valueManager.toLowerCase())){
            return true;
        }
        return false;
    });

    const getActors = actorData.filter(obj => {
        if(obj.firstName.toLowerCase().includes(valueActor.toLowerCase())){
            return true;
        }
        if(obj.lastName.toLowerCase().includes(valueActor.toLowerCase())){
            return true;
        }
        return false;
    });

    const onClickPutGenre = async (genre: GenrePayloadParams) => {
        const result = !genresPut.find((item) => item.id === genre.id)
        if(result){
            setGenresPut([...genresPut, genre]);
        }
    };

    const onClickPutActor = async (actor: ActorPayloadParams) => {
        const result = !actorPut.find((item) => item.id === actor.id)
        if(result){
            setActorPut([...actorPut, actor]);
        }
    };

    const onClickPutCountry = (country: CountryPayloadParams) => {
        const result = !countryPut.find((item) => item.id === country.id)
        if(result){
            setCountryPut([...countryPut, country]);
        }
    };

    const onClickPutManager = (stateManager: ManagerPayloadParams) => {
        const result = !managerPut.find((item) => item.id === stateManager.id)
        if(result){
            setManagerPut([...managerPut, stateManager]);
        }
    };

    const onSubmit = async (values: FilmUpgradeParams) => {
        //await dispatch();
    }
    return (
        <form encType="multipart/form-data" method="post" onSubmit={handleSubmit(onSubmit)} className={cl.upgrade}>
            <div className={cl.upgrade__block}>
                <div className={cl.upgrade__block__title}>Редактировать фильм:</div>
                <div className={cl.upgrade__block__subtitle}>Название фильма</div>
            </div>
            <div className={cl.upgrade__inputs}>
                <div className={cl.upgrade__inputs__item}>
                    <TextField  
                    InputProps={{className: cl.input}} 
                    InputLabelProps={{className: cl.input__label}} 
                    label="Название фильма"
                    defaultValue='nameFilms'
                    size="small"
                    error={Boolean(errors.nameFilms?.message)}
                    helperText={errors.nameFilms?.message}
                    {...register('nameFilms', {required: 'Введите название фильма'})}  />
                </div>
                <div className={cl.upgrade__inputs__item}>
                    <div className={cl.popup__block}>
                        <div>
                            <TextField 
                            inputRef={genreRef}
                            value={valueGenre} 
                            InputProps={{className: cl.input}} 
                            InputLabelProps={{className: cl.input__label}} 
                            label="Жанры"
                            size="small"
                            error={Boolean(errors.genres?.message)}
                            helperText={errors.genres?.message}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e, setValueGenre)}/>
                            {valueGenre &&
                            <svg className={cl.cross} onClick={() => onClickClear(genreRef, setValueGenre) } width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.1967 7.19673L17.8033 17.8033M17.8033 7.19673L7.1967 17.8033" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>}
                        </div>
                        {valueGenre && 
                        <ul>
                        {getGenres.map((genre) => <li key={genre.id}>
                        {genre.genres}
                            <svg onClick={() => onClickPutGenre(genre)} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 8.5H16M8.5 1L8.5 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </li>)}
                        </ul>
                        }
                    </div>
                    <div className={cl.block__items}>
                        {genresPut.map((genre) => <div key={genre.id} className={cl.add__item}>
                            {genre.genres}
                            <button className={cl.block__items__minus} onClick={() => onClickDelete(genre.id, setGenresPut, genresPut)}>
                            <svg  width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.1967 7.19673L17.8033 17.8033M17.8033 7.19673L7.1967 17.8033" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            </button>
                            </div>)}
                    </div>
                </div> 
            </div>
        </form>
    );
};

export default UpgradeFilm;