import React, { useState } from 'react';
import cl from './Sort.module.scss';

const Sort = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className={cl.sort}>
            <div className={cl.sort__item}>Фильтрация по:</div>
            <button className={cl.sort__item}>
                Рейтингу
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 6L0.937822 -1.88258e-07L13.0622 8.71687e-07L7 6Z" fill="white"/>
                </svg>
            </button>
            <button className={cl.sort__item}>
                Жанру
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 6L0.937822 -1.88258e-07L13.0622 8.71687e-07L7 6Z" fill="white"/>
                </svg>
            </button>
            <button className={cl.sort__item}>
                Году
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 6L0.937822 -1.88258e-07L13.0622 8.71687e-07L7 6Z" fill="white"/>
                </svg>
            </button>
            <button className={cl.sort__item}>
                Стране
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 6L0.937822 -1.88258e-07L13.0622 8.71687e-07L7 6Z" fill="white"/>
                </svg>
            </button>
            <button onClick={() => setOpen(!open)} className={cl.sort__item}>
                Сортировка по
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 6L0.937822 -1.88258e-07L13.0622 8.71687e-07L7 6Z" fill="white"/>
                </svg>
                {open && 
                    <ul>
                        <li className={cl.active}>Рейтингу сайта</li>
                        <li>Рейтингу KP</li>
                        <li>Рейтингу IMDB</li>
                        <li>Длительности</li>
                        <li>Топ за неделю</li>
                        <li>Топ за месяц</li>
                        <li>Году</li>
                        <li>Алфавиту</li>
                        <li>Год выпуска</li>
                    </ul>
                }
                
            </button>
        </div>
    );
};

export default Sort;