import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Sort from '../components/sort/Sort';
import favourite from '../img/favourite.svg';
import later from '../img/seeLater.svg';
import { RootState } from '../redux/store';

type MainProps = {
    films: {
        id: number,
        pathPoster: string,
        nameFilms: string,
    }[]
};

const Main = () => {
    const { items, status } = useSelector((state: RootState) => state.film);
    const [url, setUrl] = useState('')
    const OnOpenFilm = (id: number) => {
        const url: string = `film/${id}`;
        setUrl(url)
    }

    return (
        <div className=''>
            <Sort />
            <div className='content-main'>
                {items.map((film) =>
                <div key={film.id} className='post-block-main'>
                    <img className='post-button-favourite' src={favourite} alt="Избранное" title="Избранное" />
                    <img className='post-button-later' src={later} alt="Смотреть позже" title="Смотреть позже" />
                    <Link onClick={() => OnOpenFilm(film.id)} to={url}>
                    <img className='poster-main' src={`https://localhost:5001/`+ film.pathPoster} alt="Название фильма(год)" title="Название фильма(год)" />
                    </Link>
                    <div className='rating-block-main'>
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 0L10.4084 5.52786H16.584L11.5878 8.94427L13.4962 14.4721L8.5 11.0557L3.50383 14.4721L5.41219 8.94427L0.416019 5.52786H6.59163L8.5 0Z" fill="#F5C518"/>
                    </svg>
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 0L10.4084 5.52786H16.584L11.5878 8.94427L13.4962 14.4721L8.5 11.0557L3.50383 14.4721L5.41219 8.94427L0.416019 5.52786H6.59163L8.5 0Z" fill="#F5C518"/>
                    </svg>
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 0L10.4084 5.52786H16.584L11.5878 8.94427L13.4962 14.4721L8.5 11.0557L3.50383 14.4721L5.41219 8.94427L0.416019 5.52786H6.59163L8.5 0Z" fill="#F5C518"/>
                    </svg>
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 0L10.4084 5.52786H16.584L11.5878 8.94427L13.4962 14.4721L8.5 11.0557L3.50383 14.4721L5.41219 8.94427L0.416019 5.52786H6.59163L8.5 0Z" fill="#F5C518"/>
                    </svg>
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 0L10.4084 5.52786H16.584L11.5878 8.94427L13.4962 14.4721L8.5 11.0557L3.50383 14.4721L5.41219 8.94427L0.416019 5.52786H6.59163L8.5 0Z" fill="#F5C518"/>
                    </svg>
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 0L10.4084 5.52786H16.584L11.5878 8.94427L13.4962 14.4721L8.5 11.0557L3.50383 14.4721L5.41219 8.94427L0.416019 5.52786H6.59163L8.5 0Z" fill="#F5C518"/>
                    </svg>
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 0L10.4084 5.52786H16.584L11.5878 8.94427L13.4962 14.4721L8.5 11.0557L3.50383 14.4721L5.41219 8.94427L0.416019 5.52786H6.59163L8.5 0Z" fill="#F5C518"/>
                    </svg>
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 0L10.4084 5.52786H16.584L11.5878 8.94427L13.4962 14.4721L8.5 11.0557L3.50383 14.4721L5.41219 8.94427L0.416019 5.52786H6.59163L8.5 0Z" fill="#F5C518"/>
                    </svg>
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 0L10.4084 5.52786H16.584L11.5878 8.94427L13.4962 14.4721L8.5 11.0557L3.50383 14.4721L5.41219 8.94427L0.416019 5.52786H6.59163L8.5 0Z" fill="#F5C518"/>
                    </svg>
                    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 0L10.4084 5.52786H16.584L11.5878 8.94427L13.4962 14.4721L8.5 11.0557L3.50383 14.4721L5.41219 8.94427L0.416019 5.52786H6.59163L8.5 0Z" fill="#F5C518"/>
                    </svg>
                    </div>
                    <div className='title-block-main'>{film.nameFilms}</div>
                </div>)}
            </div>
            <div className='pagination'>
                <button className='pagination-button'>Начало</button>
                <button className='pagination-button'>1</button>
                <button className='pagination-button'>2</button>
                <button className='pagination-button'>3</button>
                <button className='pagination-button'>4</button>
                <button className='pagination-button'>5</button>
                <button className='pagination-button'>6</button>
                <button className='pagination-button'>7</button>
                <button className='pagination-button'>8</button>
                <button className='pagination-button'>9</button>
                <button className='pagination-button'>10</button>
                <button className='pagination-button'>В конец</button>
            </div>
        </div>
    );
};

export default Main;