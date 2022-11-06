import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Button from '../../components/UI/button/Button';
import { fetchAddFilm, fetchGetCountry, fetchGetGenre, fetchGetManager } from '../../redux/filmAdmin/asyncActions';
import { selectFilmAdminData } from '../../redux/filmAdmin/selectors';
import { FilmAddParams } from '../../redux/filmAdmin/types';
import { useAppDispatch } from '../../redux/store';
import {TextField, Alert} from '@mui/material';
import cl from './AddFilm.module.scss';
import { addGenreData } from '../../redux/filmAdmin/slice';

const defaultValues: FilmAddParams = {
    id: 0,
    nameFilms: '',
    ageLimit: 0,
    idRating: 0,
    ratingSite: 0,
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
    const [valueGenre,setValueGenre] = useState('');
    const [valueСountry,setValueСountry] = useState('');
    const [valueManager,setValueManager] = useState('');

    const { 
        statusFilmAdd, 
        genreData, 
        countryData, 
        managerData,} = useSelector(selectFilmAdminData);

    const { 
        register, 
        handleSubmit, 
        formState: {errors}} = useForm({
        defaultValues: defaultValues,
        mode: 'onChange'
    });

    const onSubmit = async (values: FilmAddParams) => {
            await dispatch(fetchAddFilm(values));
    }

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, set: React.Dispatch<React.SetStateAction<string>>) => {
        set(event.target.value);
    };
    
    const onClickPutGenre = async (genre: {id: number, genres: string}) => {
        await dispatch(addGenreData(genre))
        //     setGenresPut([...genresPut, genre]);
        // }
    };

    // const onClickPutCountry = (country: {id: number, country: string}) => {
    //     if(!countryData.find((item) => item.id === country.id)){
    //         setCountryPut([...countryPut, country]);
    //     }
    // };

    // const onClickPutManager = (stateManager: {id: number, stageManagers: string}) => {
    //     if(!managerData.find((item) => item.id === stateManager.id)){
    //         setManagerPut([...managerPut, stateManager]);
    //     }
    // };

    const onClickDelete = (id: number, setDelete: Function, sds: {id: number}[]) => {
        setDelete(sds.filter(obj => obj.id !== id));
    };

    useEffect(() => {
        dispatch(fetchGetGenre());
        dispatch(fetchGetCountry());
        dispatch(fetchGetManager());
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

    return (
        <div className={cl.add}>
            <div className={cl.add__title}>Добавить фильм</div>
            <form onSubmit={handleSubmit(onSubmit)} className={cl.add__block}>
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
                        <TextField  
                        value={valueGenre} 
                        InputProps={{className: cl.input}} 
                        InputLabelProps={{className: cl.input__label}} 
                        label="Жанры"
                        size="small"
                        error={Boolean(errors.genreIds?.message)}
                        helperText={errors.genreIds?.message}
                        {...register('genreIds', {required: 'Введите жанры'})}  
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e, setValueGenre)}/>
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
                        {/* {genresPut.map((genre) => <div key={genre.id} className={cl.add__item}>
                            {genre.genres}
                            <button className={cl.block__items__minus} onClick={() => onClickDelete(genre.id, setGenresPut, genresPut)}>
                            <svg  width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.1967 7.19673L17.8033 17.8033M17.8033 7.19673L7.1967 17.8033" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            </button>
                            </div>)} */}
                    </div>
                </div> 
                {/* <div className={cl.add__block__item}>
                    <div className={cl.popup__block}>
                        <TextField  
                        value={valueСountry} 
                        InputProps={{className: cl.input}} 
                        InputLabelProps={{className: cl.input__label}} 
                        label="Страны"
                        size="small"
                        error={Boolean(errors.countryIds?.message)}
                        helperText={errors.countryIds?.message}
                        {...register('countryIds', {required: 'Введите страны'})}  
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e, setValueСountry)}/>
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
                        <TextField  
                        value={valueManager} 
                        InputProps={{className: cl.input}} 
                        InputLabelProps={{className: cl.input__label}} 
                        label="Режиссер"
                        size="small"
                        error={Boolean(errors.stageManagerIds?.message)}
                        helperText={errors.stageManagerIds?.message}
                        {...register('stageManagerIds', {required: 'Введите режиссеров'})}  
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e, setValueManager)}/>
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
                </div> */}
                    <Button>Добавить</Button>
            </form>
        </div>
    );
};

export default AddFilm;