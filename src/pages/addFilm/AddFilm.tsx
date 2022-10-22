import axios from 'axios';
import React, { useEffect, useState } from 'react';
import cl from './AddFilm.module.scss';

type AddFilmProps = {
        id: number,
        genres: string
}[];

const AddFilm = () => {
    const [genres, setGenres] = useState<AddFilmProps>([]);
    const [genresPost, setGenresPost] = useState<AddFilmProps>([]);
    const [value, setValue] = React.useState<string>('');

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    
    const onClickPutGenre = (genre: {id: number, genres: string}) => {
        if(!genresPost.find((item) => item.id === genre.id)){
            setGenresPost([...genresPost, genre]);
        }
        
        console.log(genresPost)
    };

    const onClickDelete = (id: number) => {
        
        setGenresPost(genresPost.filter(obj => obj.id !== id));
        console.log(genresPost)
    };

    useEffect(() => {
        axios.get('https://localhost:44369/api/Genre/allGenre').then((response) => {
            setGenres(response.data);
        });
    }, []);

    const getGenres = genres.filter(obj => {
        if(obj.genres.toLowerCase().includes(value.toLowerCase())){
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
                        value={value} 
                        placeholder='Жанр'
                        onChange={onChangeInput} />
                        
                        {value && 
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
                        {genresPost.map((genre) => <div key={genre.id} className={cl.add__genre}>
                            {genre.genres}
                            <button className={cl.block__items__minus} onClick={() => onClickDelete(genre.id)}>
                            <svg  width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.1967 7.19673L17.8033 17.8033M17.8033 7.19673L7.1967 17.8033" stroke="white" stroke-width="2" stroke-linecap="round"/>
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