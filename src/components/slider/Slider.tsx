import cl from './Slider.module.scss';
import { useSelector } from 'react-redux';
import { selectFilmData } from '../../redux/film/selectors';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import SkeletonSlider from '../skeleton/SkeletonSlider';
import img from '../../img/posterSlider.jpg'
import { useAppDispatch } from '../../redux/store';
import { fetchSliderFilms } from '../../redux/film/asyncActions';

const Slider = () => {
    const { sliderFilms, sliderFilmsStatus } = useSelector(selectFilmData);
    const [offset, setOffset] = useState(0);
    const dispatch = useAppDispatch();
    const ref = useRef<HTMLDivElement>(null);
    
    const items = [
        {id: 1, nameFilms: 'Test1', pathPoster: '/'},
        {id: 2, nameFilms: 'Test2', pathPoster: '/'},
        {id: 3, nameFilms: 'Test3', pathPoster: '/'},
        {id: 4, nameFilms: 'Test4', pathPoster: '/'},
        {id: 5, nameFilms: 'Test5', pathPoster: '/'},
        {id: 6, nameFilms: 'Test6', pathPoster: '/'},
        {id: 7, nameFilms: 'Test7', pathPoster: '/'},
        {id: 8, nameFilms: 'Test8', pathPoster: '/'},
        {id: 9, nameFilms: 'Test9', pathPoster: '/'},
        {id: 10, nameFilms: 'Test10', pathPoster: '/'},
        {id: 11, nameFilms: 'Test11', pathPoster: '/'},
        {id: 12, nameFilms: 'Test12', pathPoster: '/'},
        {id: 13, nameFilms: 'Test13', pathPoster: '/'},
        {id: 14, nameFilms: 'Test14', pathPoster: '/'},
        {id: 15, nameFilms: 'Test15', pathPoster: '/'},
        {id: 16, nameFilms: 'Test16', pathPoster: '/'},
        {id: 17, nameFilms: 'Test17', pathPoster: '/'},
        {id: 18, nameFilms: 'Test18', pathPoster: '/'},
        {id: 19, nameFilms: 'Test19', pathPoster: '/'},
        {id: 20, nameFilms: 'Test20', pathPoster: '/'},
    ];

    const prevHandler = () => {
        if(offset !== 0){
            const newOffset = offset + 156;
            setOffset(newOffset)
        }else{
            setOffset(-2028)
        }
    }

    const nextHandler = () => {
        if(offset !== -2028){
        const newOffset = offset - 156;
        setOffset(newOffset)
        }else{
            setOffset(0)
        }
    }

    useEffect(() => {
            dispatch(fetchSliderFilms())
        }, []);
    
    const slider = sliderFilms.map((film: any) => <div style={{transform: `translateX(${offset}px)`}} className={cl.slide}>
            <Link to={`/film/${film.id}`}>
            <img className={cl.poster__slider} src={`https://localhost:44369/`+ film.pathPoster} alt="Название фильма(год)" title="Название фильма(год)" />
            
            {/* <img className={cl.slide__poster} src={img} alt="Название фильма(год)" title="Название фильма(год)" /> */}
            </Link>
            <div className={cl.slide__title}>{film.nameFilms}</div>
</div>);
    const skeletons = [...new Array(8)].map((_, index) => <SkeletonSlider key={index} />);

    return (
        <div className={cl.slider}>
        <svg onClick={() => prevHandler()} className={cl.slider__content__button__left} width="31" height="38" viewBox="0 0 31 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10C0 4.47715 4.47715 0 10 0H31V38H10C4.47715 38 0 33.5228 0 28V10Z" fill="url(#paint0_linear_56_5)"/>
            <path d="M20 10L10 19.5L20 29" stroke="url(#paint1_linear_56_5)" strokeOpacity="0.64" strokeWidth="5" strokeLinecap="round"/>
            <defs>
            <linearGradient id="paint0_linear_56_5" x1="0" y1="19" x2="29" y2="19" gradientUnits="userSpaceOnUse">
            <stop stopColor="#720D0D"/>
            <stop offset="1" stopColor="#D31515" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_56_5" x1="10" y1="19" x2="20" y2="19" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="#D8D6D6" stopOpacity="0"/>
            </linearGradient>
            </defs>
        </svg>
            <div className={cl.slider__content} ref={ref}>
            {sliderFilmsStatus === 'loading' || 'error'
            ? skeletons
            : slider}
            </div>
            <svg onClick={() => nextHandler()} className={cl.slider__content__button__right} width="31" height="38" viewBox="0 0 31 38" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    );
};

export default Slider;

