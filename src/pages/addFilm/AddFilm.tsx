import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Button from '../../components/UI/button/Button';
import { fetchAddFilm, fetchGetCountries, fetchGetGenres, fetchGetManagers, fetchGetActors, fetchUpload } from '../../redux/filmAdmin/asyncActions';
import { selectFilmAdminData } from '../../redux/filmAdmin/selectors';
import { 
    FilmAddParams, 
    GenrePayloadParams, 
    ManagerPayloadParams, 
    CountryPayloadParams, 
    ActorPayloadParams } from '../../redux/filmAdmin/types';
import { useAppDispatch } from '../../redux/store';
import {TextField, Alert} from '@mui/material';
import cl from './AddFilm.module.scss';
import { Navigate } from 'react-router-dom';

const defaultValues: FilmAddParams = {
    nameFilms: '',
    ageLimit: 0,
    idRating: 0,
    releaseDate: 0,
    linkFilmPlayer: '',
    linkFilmtrailer: '',
    countryIds: [],
    actorIds: [],
    genreIds: [],
    stageManagerIds: [],
    description: '',
    time: 0,
    pathPoster: '',
    imageName: ''
}

const AddFilm = () => {
    const dispatch = useAppDispatch();
    const [valueGenre, setValueGenre] = useState('');
    const [valueСountry, setValueСountry] = useState('');
    const [valueManager, setValueManager] = useState('');
    const [valueActor, setValueActor] = useState('');

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

    const { 
        register, 
        handleSubmit, 
        formState: {errors, isValid}} = useForm({
        defaultValues: defaultValues,
        mode: 'onChange'
    });

    const onSubmit = async (values: FilmAddParams) => {
        genresPut.map((genre) => values.genreIds.push(genre.id));
        actorPut.map((actor) => values.actorIds.push(actor.id));
        countryPut.map((country) => values.countryIds.push(country.id));
        managerPut.map((manager) => values.stageManagerIds.push(manager.id));
        values.imageName = urlData;
        values.pathPoster = `/Files/${urlData}`
        
        await dispatch(fetchAddFilm(values));
    }

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, set: React.Dispatch<React.SetStateAction<string>>) => {
        set(event.target.value);
    };
    
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

    const onClickDelete = (id: number, setDelete: Function, sds: {id: number}[]) => {
        setDelete(sds.filter(obj => obj.id !== id));
    };

    useEffect(() => {
        dispatch(fetchGetGenres());
        dispatch(fetchGetCountries());
        dispatch(fetchGetManagers());
        dispatch(fetchGetActors());
    }, []);

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
        if(obj?.lastName.toLowerCase().includes(valueActor.toLowerCase())){
            return true;
        }
        return false;
    });

    const onClickClear = (inputRef: React.RefObject<HTMLInputElement>, setProps: React.Dispatch<React.SetStateAction<string>>) => {
        setProps('');
        inputRef.current?.focus();
    };

    const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) =>{
        try{
            const formData = new FormData();
            const file = e.target.files![0];
            formData.append('file', file);
            console.log(file)
            dispatch(fetchUpload(formData));
        } catch(err) {
            console.log(err)
        }
    }
    
    if(filmAddStatus === 'completed'){
        return <Navigate to='/' />;
    }

    return (
        <div className={cl.add}>
            <div className={cl.add__title}>Добавить фильм</div>
            {filmAddStatus === 'error' && 
                <Alert className={cl.alert} variant="filled" severity="error">
                    Что-то пошло — <strong>не так</strong>
                </Alert>}
            <form encType="multipart/form-data" method="post" onSubmit={handleSubmit(onSubmit)} className={cl.add__block}>
                <div className={cl.add__block__item}>
                        <TextField  
                        InputProps={{className: cl.input}} 
                        InputLabelProps={{className: cl.input__label}} 
                        label="Название фильма"
                        size="small"
                        error={Boolean(errors.nameFilms?.message)}
                        helperText={errors.nameFilms?.message}
                        {...register('nameFilms', {required: 'Введите название фильма'})}  />
                </div>
                <div className={cl.add__block__item}>
                    <div className={cl.popup__block}>
                        <div>
                            <TextField 
                            inputRef={genreRef}
                            value={valueGenre} 
                            InputProps={{className: cl.input}} 
                            InputLabelProps={{className: cl.input__label}} 
                            label="Жанры"
                            size="small"
                            error={Boolean(errors.genreIds?.message)}
                            helperText={errors.genreIds?.message}
                            //{...register('genreIds', {required: 'Введите жанры'})}  
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
                <div className={cl.add__block__item}>
                    <div className={cl.popup__block}>
                        <div>
                            <TextField  
                            inputRef={countryRef}
                            value={valueСountry} 
                            InputProps={{className: cl.input}} 
                            InputLabelProps={{className: cl.input__label}} 
                            label="Страны"
                            size="small"
                            error={Boolean(errors.countryIds?.message)}
                            helperText={errors.countryIds?.message}
                            //{...register('countryIds', {required: 'Введите страны'})}  
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e, setValueСountry)}/>
                            {valueСountry &&
                            <svg className={cl.cross} onClick={() => onClickClear(countryRef, setValueСountry) } width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.1967 7.19673L17.8033 17.8033M17.8033 7.19673L7.1967 17.8033" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>}
                        </div>

                        {valueСountry && 
                        <ul>
                        {getCountries.map((country) => <li key={country.id}>
                        {country.country}
                            <svg onClick={() => onClickPutCountry(country)} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 8.5H16M8.5 1L8.5 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </li>)}
                        </ul>
                        }
                    </div>
                    <div className={cl.block__items}>
                        {countryPut.map((country) => <div key={country.id} className={cl.add__item}>
                            {country.country}
                            <button className={cl.block__items__minus} onClick={() => onClickDelete(country.id, setCountryPut, countryPut)}>
                            <svg  width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.1967 7.19673L17.8033 17.8033M17.8033 7.19673L7.1967 17.8033" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            </button>
                            </div>)}
                    </div>
                </div>
                <div className={cl.add__block__item}>
                    <div className={cl.popup__block}>
                        <div>
                            <TextField  
                            value={valueManager} 
                            InputProps={{className: cl.input}} 
                            InputLabelProps={{className: cl.input__label}} 
                            label="Режиссер"
                            size="small"
                            error={Boolean(errors.stageManagerIds?.message)}
                            helperText={errors.stageManagerIds?.message}
                            //{...register('stageManagerIds', {required: 'Введите режиссеров'})}  
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e, setValueManager)}/>
                            {valueManager &&
                            <svg className={cl.cross} onClick={() => onClickClear(managerRef, setValueManager) } width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.1967 7.19673L17.8033 17.8033M17.8033 7.19673L7.1967 17.8033" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>}
                        </div>
                        
                        {valueManager && 
                        <ul>
                        {getManagers.map((manager) => <li key={manager.id}>
                        {manager.stageManagers}
                            <svg onClick={() => onClickPutManager(manager)} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 8.5H16M8.5 1L8.5 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </li>)}
                        </ul>
                        }
                    </div>
                    <div className={cl.block__items}>
                        {managerPut.map((manager) => <div key={manager.id} className={cl.add__item}>
                            {manager.stageManagers}
                            <button className={cl.block__items__minus} onClick={() => onClickDelete(manager.id, setManagerPut, managerPut)}>
                            <svg  width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.1967 7.19673L17.8033 17.8033M17.8033 7.19673L7.1967 17.8033" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            </button>
                            </div>)}
                    </div>
                </div>
                <div className={cl.add__block__item}>
                    <div className={cl.popup__block}>
                        <div>
                            <TextField  
                            inputRef={actorRef}
                            value={valueActor} 
                            InputProps={{className: cl.input}} 
                            InputLabelProps={{className: cl.input__label}} 
                            label="Актеры"
                            size="small"
                            error={Boolean(errors.actorIds?.message)}
                            helperText={errors.actorIds?.message}
                            //{...register('actorIds', {required: 'Введите актеров'})}  
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e, setValueActor)}/>
                            {valueActor &&
                            <svg className={cl.cross} onClick={() => onClickClear(actorRef, setValueActor) } width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.1967 7.19673L17.8033 17.8033M17.8033 7.19673L7.1967 17.8033" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>}
                        </div>
                        
                        {valueActor && 
                        <ul>
                        {getActors.map((actor) => <li key={actor.id}>
                        {actor.firstName + ' ' + actor.lastName}
                            <svg onClick={() => onClickPutActor(actor)} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 8.5H16M8.5 1L8.5 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </li>)}
                        </ul>
                        }
                    </div>
                    <div className={cl.block__items}>
                        {actorPut.map((actor) => <div key={actor.id} className={cl.add__item}>
                            {actor.firstName + ' ' + actor.lastName}
                            <button className={cl.block__items__minus} onClick={() => onClickDelete(actor.id, setActorPut, actorPut)}>
                            <svg  width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.1967 7.19673L17.8033 17.8033M17.8033 7.19673L7.1967 17.8033" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            </button>
                            </div>)}
                    </div>
                </div>
                <div className={cl.add__block__item}>
                        <TextField  
                        InputProps={{className: cl.input}} 
                        InputLabelProps={{className: cl.input__label}} 
                        label="Возрастное ограничение"
                        size="small"
                        error={Boolean(errors.ageLimit?.message)}
                        helperText={errors.ageLimit?.message}
                        {...register('ageLimit', {required: 'Введите ограничение по возрасту'})}  />
                </div>
                <div className={cl.add__block__item}>
                        <TextField  
                        InputProps={{className: cl.input}} 
                        InputLabelProps={{className: cl.input__label}} 
                        label="Дата релиза"
                        size="small"
                        error={Boolean(errors.releaseDate?.message)}
                        helperText={errors.releaseDate?.message}
                        {...register('releaseDate', {required: 'Введите дату релиза'})}  />
                </div>
                <div className={cl.add__block__item}>
                        <TextField  
                        InputProps={{className: cl.input}} 
                        InputLabelProps={{className: cl.input__label}} 
                        label="Время"
                        size="small"
                        error={Boolean(errors.time?.message)}
                        helperText={errors.time?.message}
                        {...register('time', {required: 'Введите длительность фильма'})}  />
                </div>
                <div className={cl.add__block__item}>
                        <TextField  
                        InputProps={{className: cl.input}} 
                        InputLabelProps={{className: cl.input__label}} 
                        label="Ид рейтинг"
                        size="small"
                        error={Boolean(errors.idRating?.message)}
                        helperText={errors.idRating?.message}
                        {...register('idRating', {required: 'Введите ид рейтинг'})}  />
                </div>
                <div className={cl.add__block__item}>
                        <TextField  
                        InputProps={{className: cl.input}} 
                        InputLabelProps={{className: cl.input__label}} 
                        label="Ссылка на трейлер"
                        size="small"
                        error={Boolean(errors.linkFilmtrailer?.message)}
                        helperText={errors.linkFilmtrailer?.message}
                        {...register('linkFilmtrailer', {required: 'Введите ссылку на трейлер'})}  />
                </div>
                <div className={cl.add__block__item}>
                        <TextField  
                        InputProps={{className: cl.input}} 
                        InputLabelProps={{className: cl.input__label}} 
                        label="Ссылка на фильм"
                        size="small"
                        error={Boolean(errors.linkFilmPlayer?.message)}
                        helperText={errors.linkFilmPlayer?.message}
                        {...register('linkFilmPlayer', {required: 'Введите ссылку на фильм'})}  />
                </div>
                <div className={cl.add__block__item}>
                        <TextField  
                        InputProps={{className: cl.input}} 
                        InputLabelProps={{className: cl.input__label}} 
                        label="Описание"
                        size="small"
                        error={Boolean(errors.description?.message)}
                        helperText={errors.description?.message}
                        {...register('description', {required: 'Введите описание'})}  />
                </div>
                <div className={cl.add__block__item}>
                        <input
                        //{...register('imageName', {required: 'Загрузите файл'})} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeFile(e)}
                        type='file'
                        accept='image/*, .png, .jpg, .web'
                        ref={inputFileRef}
                        hidden
                        />
                        
                        <button type="button" className={cl.btn} onClick={() => inputFileRef.current?.click()}>Добавить файл</button>
                        {urlData && <img width={200} src={`https://localhost:44369/Files/${urlData}`} alt="Постер" />}
                </div>
                    <Button disabled={isValid}>Добавить</Button>
            </form>
        </div>
    );
};

export default AddFilm;