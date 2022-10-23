import axios from 'axios';
import React, { useEffect, useState } from 'react';
import cl from './AddFilm.module.scss';

type GenreProps = {
        id: number,
        genres: string
}[];

type CountryProps = {
    id: number,
    country: string
}[];

type ManagerProps = {
    id: number,
    stageManagers: string
}[];

const AddFilm = () => {
    const [genres, setGenres] = useState<GenreProps>([]);
    const [genresPut, setGenresPut] = useState<GenreProps>([]);
    const [valueGenre, setValueGenre] = React.useState<string>('');

    const [country, setCountry] = useState<CountryProps>([]);
    const [countryPut, setCountryPut] = useState<CountryProps>([]);
    const [valueСountry, setValueСountry] = React.useState<string>('');

    const [manager, setManager] = useState<ManagerProps>([]);
    const [managerPut, setManagerPut] = useState<ManagerProps>([]);
    const [valueManager, setValueManager] = React.useState<string>('');

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, set: React.Dispatch<React.SetStateAction<string>>) => {
        set(event.target.value);
    };
    
    const onClickPutGenre = (genre: {id: number, genres: string}) => {
        if(!genresPut.find((item) => item.id === genre.id)){
            setGenresPut([...genresPut, genre]);
        }
    };

    const onClickPutCountry = (country: {id: number, country: string}) => {
        if(!countryPut.find((item) => item.id === country.id)){
            setCountryPut([...countryPut, country]);
        }
    };

    const onClickPutManager = (stateManager: {id: number, stageManagers: string}) => {
        if(!managerPut.find((item) => item.id === stateManager.id)){
            setManagerPut([...managerPut, stateManager]);
        }
    };

    const onClickDelete = (id: number, setDelete: Function, sds: {id: number}[]) => {
        setDelete(sds.filter(obj => obj.id !== id));
    };

    useEffect(() => {
        axios.get('https://localhost:44369/api/Genre/allGenre').then((response) => {
            setGenres(response.data);
        });

        axios.get('https://localhost:44369/api/Country/allCountry').then((response) => {
            setCountry(response.data);
        });

        axios.get('https://localhost:44369/api/StageManager/allStageManager').then((response) => {
            setManager(response.data);
        });

    }, []);

    const getGenres = genres.filter(obj => {
        if(obj.genres.toLowerCase().includes(valueGenre.toLowerCase())){
            return true;
        }
        return false;
    });

    const getCountries = country.filter(obj => {
        if(obj.country.toLowerCase().includes(valueСountry.toLowerCase())){
            return true;
        }
        return false;
    });

    const getManagers = manager.filter(obj => {
        if(obj.stageManagers.toLowerCase().includes(valueManager.toLowerCase())){
            return true;
        }
        return false;
    });

    return (
        <div className={cl.add}>
            <div className={cl.add__title}>Добавить фильм</div>
            <div className={cl.add__block}>
                <div className={cl.add__block__item}>
                    <div className={cl.add__block__item__text}>Название фильма:</div>
                    <input placeholder='Название фильма' />
                </div>
                <div className={cl.add__block__item}>
                    <div className={cl.add__block__item__text}>Жанр:</div>
                    <div className={cl.popup__block}>
                        <input 
                        value={valueGenre} 
                        placeholder='Жанр'
                        onChange={(e) => onChangeInput(e, setValueGenre)} />
                        {valueGenre && 
                        <ul>
                        {getGenres.map((genre) => <li key={genre.id}>
                        {genre.genres}
                        <button onClick={() => onClickPutGenre(genre)}>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 8.5H16M8.5 1L8.5 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
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
                    <div className={cl.add__block__item__text}>Страна:</div>
                    <div className={cl.popup__block}>
                        <input 
                        value={valueСountry} 
                        placeholder='Страна'
                        onChange={(e) => onChangeInput(e, setValueСountry)} />
                        {valueСountry && 
                        <ul>
                        {getCountries.map((country) => <li key={country.id}>
                        {country.country}
                        <button onClick={() => onClickPutCountry(country)}>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 8.5H16M8.5 1L8.5 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
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
                    <div className={cl.add__block__item__text}>Режиссер:</div>
                    <div className={cl.popup__block}>
                        <input 
                        value={valueManager} 
                        placeholder='Режиссер'
                        onChange={(e) => onChangeInput(e, setValueManager)} />
                        {valueManager && 
                        <ul>
                        {getManagers.map((manager) => <li key={manager.id}>
                        {manager.stageManagers}
                        <button onClick={() => onClickPutManager(manager)}>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 8.5H16M8.5 1L8.5 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
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
            </div>
        </div>
    );
};

export default AddFilm;