import React from 'react';
import cl from './Slider.module.scss';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store'
import { RootState } from '../../redux/store';
import { fetchFilms } from '../../redux/slices/filmSlice';

type SliderProps = {
    films: {
        id: number,
        pathPoster: string,
        nameFilms: string,
    }[]
};

const Slider = () => {
    const dispatch = useAppDispatch();
    dispatch(fetchFilms());
    const { items, status } = useSelector((state: RootState) => state.film);
    return (
        <div className={cl.slider}>
            <div className={cl.slider__content}>
                <svg className={cl.slider__content__button} width="31" height="38" viewBox="0 0 31 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10C0 4.47715 4.47715 0 10 0H31V38H10C4.47715 38 0 33.5228 0 28V10Z" fill="url(#paint0_linear_56_5)"/>
                    <path d="M20 10L10 19.5L20 29" stroke="url(#paint1_linear_56_5)" strokeOpacity="0.64" strokeWidth="5" strokeLinecap="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_56_5" x1="0" y1="19" x2="31" y2="19" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#720D0D"/>
                    <stop offset="1" stopColor="#D31515" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_56_5" x1="10" y1="19" x2="20" y2="19" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#D8D6D6" stopOpacity="0"/>
                    </linearGradient>
                    </defs>
                </svg>
                <div className={cl.slider__content__group}>
                {items.map((film) =>
                    <div key={film.id} className={cl.post__block}>
                        <a href='/'>
                        <img className={cl.poster__slider} src={`https://localhost:5001/`+ film.pathPoster} alt="Название фильма(год)" title="Название фильма(год)" />
                        </a>
                        <div className={cl.title__slider}>{film.nameFilms}</div>
                    </div>).slice(0, 7)}
                </div>
                <svg className={cl.slider__content__button} width="31" height="38" viewBox="0 0 31 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31 28C31 33.5228 26.5228 38 21 38L0 38L3.32207e-06 -2.71011e-06L21 -8.74228e-07C26.5229 -3.91405e-07 31 4.47715 31 10L31 28Z" fill="url(#paint0_linear_56_6)"/>
                    <path d="M11 28L21 18.5L11 9" stroke="url(#paint1_linear_56_6)" strokeOpacity="0.64" strokeWidth="5" strokeLinecap="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_56_6" x1="31" y1="19" x2="1.66103e-06" y2="19" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#720D0D"/>
                    <stop offset="1" stopColor="#3D1D1D" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_56_6" x1="21" y1="19" x2="11" y2="19" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#D8D6D6" stopOpacity="0"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default Slider;

function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
function fetchPizzas(): any {
    throw new Error('Function not implemented.');
}

