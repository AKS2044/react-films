import React from 'react';
import favourite from '../img/favourite.svg';
import later from '../img/seeLater.svg';

const Main = (props) => {
    console.log(props)
    return (
        <div className=''>
            <div className='sort-block'>
                <div className='sort-item'>Фильтрация по:</div>
                <div className='sort-item'>
                Рейтингу
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 6L0.937822 -1.88258e-07L13.0622 8.71687e-07L7 6Z" fill="white"/>
                </svg>
                </div>
                <div className='sort-item'>
                Жанру
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 6L0.937822 -1.88258e-07L13.0622 8.71687e-07L7 6Z" fill="white"/>
                </svg>
                </div>
                <div className='sort-item'>
                Году
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 6L0.937822 -1.88258e-07L13.0622 8.71687e-07L7 6Z" fill="white"/>
                </svg>
                </div>
                <div className='sort-item'>
                Стране
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 6L0.937822 -1.88258e-07L13.0622 8.71687e-07L7 6Z" fill="white"/>
                </svg>
                </div>
                <div className='sort-item'>
                Сортировка по
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 6L0.937822 -1.88258e-07L13.0622 8.71687e-07L7 6Z" fill="white"/>
                </svg>
                </div>
            </div>
            <div className='content-main'>
                {props.films.map((film, index) =>
                <div key={index} className='post-block-main'>
                    <img className='post-button-favourite' src={favourite} alt="Избранное" title="Избранное" />
                    <img className='post-button-later' src={later} alt="Смотреть позже" title="Смотреть позже" />
                    <a href='/'>
                    <img className='poster-main' src={film.photo} alt="Название фильма(год)" title="Название фильма(год)" />
                    </a>
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
                    <div className='title-block-main'>{film.name}</div>
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