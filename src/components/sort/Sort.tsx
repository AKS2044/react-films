import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchGetCountries } from '../../redux/filmAdmin/asyncActions';
import { selectFilmAdminData } from '../../redux/filmAdmin/selectors';
import { selectFilter } from '../../redux/filter/selectors';
import { setCountry, setGenre } from '../../redux/filter/slice';
import { useAppDispatch } from '../../redux/store';
import Button from '../UI/button/Button';
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
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(false);
    const [sortId, setSortId] = useState(0);
    const { currentPage, genreId, countryId } = useSelector(selectFilter);
    const { genreData, countryData } = useSelector(selectFilmAdminData);
    const [openGenre, setOpenGenre] = useState(false);
    const [openCountry, setOpenCountry] = useState(false);
    const [valueСountry, setValueСountry] = useState('');
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

    useEffect(() => {
        dispatch(fetchGetCountries());
    }, []);

    const onChangeGenre = (genreId: number) => {
        dispatch(setGenre(genreId));
    };
    const onChangeCountry = (countryId: number) => {
        console.log(countryId)
        dispatch(setCountry(countryId));
    };

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueСountry(event.target.value);
    };

    const getCountries = countryData.filter(obj => {
        if(obj.country.toLowerCase().includes(valueСountry.toLowerCase())){
            return true;
        }
        return false;
    });

    const getGenreActive = genreData.find((g) => g.id === genreId);
    
    return (
        <>
        
        <div ref={sortRef} className={cl.sort}>
            <div className={cl.sort__item}>Фильтрация по:</div>
            <button onClick={() => setOpenGenre(!openGenre)} className={cl.sort__item}>
                Жанру
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 6L0.937822 -1.88258e-07L13.0622 8.71687e-07L7 6Z" fill="white"/>
                </svg>
                {openGenre && 
                    <ul className={cl.sort__ul}>
                        {genreData.map((g) => <li onClick={() => onChangeGenre(g.id)} key={g.id} className={genreId === g.id ? `${cl.sort__ul__li} ${cl.active}` : `${cl.sort__ul__li}`}>{g.genres}</li>)}
                    </ul>
                }
            </button>
                <div className={cl.sort__item}>
                    <button onClick={() => setOpenCountry(!openCountry)} >
                        Стране
                        <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 6L0.937822 -1.88258e-07L13.0622 8.71687e-07L7 6Z" fill="white"/>
                        </svg>
                    </button>
                {openCountry && 
                        <ul className={cl.sort__country}>
                            <input 
                            placeholder='Поиск страны'
                            className={cl.sort__country__input}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e)}
                            value={valueСountry}/>
                            {valueСountry && <>{getCountries.map((c) => <li onClick={() => onChangeCountry(c.id)} key={c.id} className={sortId === c.id ? `${cl.sort__country__li} ${cl.active}` : `${cl.sort__country__li}`}>{c.country}</li>)}</>}
                        </ul>
                    }
                </div>
            <button onClick={() => setOpen(!open)} className={cl.sort__item}>
                Сортировка по:
                <div className={cl.sort__item__active}>{sortItem.find((value , index) => index === sortId)}</div>
                <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 6L0.937822 -1.88258e-07L13.0622 8.71687e-07L7 6Z" fill="white"/>
                </svg>
                {open && 
                    <ul className={cl.sort__ul}>
                        {sortItem.map((item, index) => <li onClick={() => setSortId(index)} key={index} className={sortId === index ? `${cl.sort__ul__li} ${cl.active}` : `${cl.sort__ul__li}`}>{item}</li>)}
                    </ul>
                }
            </button>
        </div>
        {(genreId !== 0 || countryId !== 0) && <div className={cl.sort__active}>
                <button className={cl.sort__button}>{getGenreActive?.genres}<span className={cl.sort__button__span}>⛌</span></button>
        </div>}
        
        </>
    );
};

export default Sort;