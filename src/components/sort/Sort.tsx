import React, { useEffect, useRef, useState } from 'react';
import cl from './Sort.module.scss';

const sortItem = [
    'Новое на сайте',
    'Рейтингу сайта', 
    'Рейтингу KP',
    'Рейтингу IMDB',
    'Длительности',
    'Топ за неделю',
    'Топ за месяц',
    'Году',
    'Алфавиту',
    'Год выпуска']

    type PopupClick = MouseEvent & {
        path: Node[];
    };

const Sort = () => {
    const [open, setOpen] = useState(false);
    const [sortId, setSortId] = useState(0);
    const sortRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        const _event = event as PopupClick;
        if (sortRef.current && !_event.path.includes(sortRef.current)) {
            setOpen(false);
        }
        };
    
        document.body.addEventListener('click', handleClickOutside);
    
        return () => document.body.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div ref={sortRef} className={cl.sort}>
            <div className={cl.sort__item}>Фильтрация по:</div>
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
                Сортировка по:
                <div className={cl.sort__item__active}>{sortItem.find((value , index) => index === sortId)}</div>
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 6L0.937822 -1.88258e-07L13.0622 8.71687e-07L7 6Z" fill="white"/>
                </svg>
                {open && 
                    <ul>
                        {sortItem.map((item, index) => <li onClick={() => setSortId(index)} key={index} className={sortId === index ? cl.active : ''}>{item}</li>)}
                    </ul>
                }
            </button>
        </div>
    );
};

export default Sort;