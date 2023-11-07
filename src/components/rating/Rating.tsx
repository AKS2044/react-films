import { fetchSetRatingFilm } from '../../redux/film/asyncActions';
import { FilmRatingParams } from '../../redux/film/types';
import { useAppDispatch } from '../../redux/store';
import star from '../../img/star.svg';
import cl from './Rating.module.scss';
import { useEffect, useState } from 'react';
import { selectFilmData } from '../../redux/film/selectors';
import { useSelector } from 'react-redux';
import { selectLoginData } from '../../redux/Auth/selectors';

type RatingProps = {
    filmId: number,
    ratingSite: number,
    userName: string,
    width: number
}

const Rating: React.FC<RatingProps> = ({filmId, userName, ratingSite, width}) => {
    const [timer, setTimer] = useState(false);
    const [timerAuth, setTimerAuth] = useState(false);
    const [timerScore, setTimerScore] = useState(false);
    const dispatch = useAppDispatch();
    const ratingArray = [10,9,8,7,6,5,4,3,2,1];

    const { setRatingStatus } = useSelector(selectFilmData);
    const { statusAuth } = useSelector(selectLoginData);

    const onClickSetRating = async (rating: number) => {
        const params: FilmRatingParams = {rating: rating, filmId: filmId, userName: userName};
        if(statusAuth === 'completed'){
            await dispatch(fetchSetRatingFilm(params));
        }else{
                setTimerAuth(true);
                const timer = setTimeout(() => {
                    setTimerAuth(false);
                }, 2000);
                return () => clearTimeout(timer);
        }
    }

    useEffect(() => {
        if(setRatingStatus === 'error'){
            setTimer(true);
            const timer = setTimeout(() => {
                setTimer(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
        if(setRatingStatus === 'completed'){
            setTimerScore(true);
            const timer = setTimeout(() => {
                setTimerScore(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [setRatingStatus]);

    return (
        <div className={cl.rating}>
            {timer && 
            <div className={cl.rating__modal}>
                <span className={cl.rating__modal__bg__smile}>&#129320;</span>
                <div className={cl.rating__modal__bg__title}>Вы уже голосовали</div> 
            </div>}
            {timerScore && 
            <div className={cl.rating__modal}>
                <div className={cl.rating__modal__bg}>
                    <span className={cl.rating__modal__bg__smile}>&#128521;</span>
                    <div className={cl.rating__modal__bg__title}>Спасибо за ваш голос</div> 
                </div>
            </div>}
            {timerAuth && 
            <div className={cl.rating__modal}>
                <div className={cl.rating__modal__bg}>
                    <span className={cl.rating__modal__bg__smile}>&#128561;</span>
                    <div className={cl.rating__modal__bg__title}>Вы не авторизованы</div> 
                </div>
            </div>}
            {ratingArray.map((r) => <span className={ratingSite >= r? `${cl.active}` : ``} onClick={() => onClickSetRating(r)} key={r}><img width={width} src={star} alt='Rating'/></span>)}
        </div>
    );
};

export default Rating;