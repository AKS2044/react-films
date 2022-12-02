import { Link } from 'react-router-dom';
import cl from './ItemFilm.module.scss';
import favourite from '../../img/favourite.svg';
import later from '../../img/seeLater.svg';
import star from '../../img/star.svg';
import { useAppDispatch } from '../../redux/store';
import { fetchAddFavouriteFilm, fetchAddWatchLaterFilm } from '../../redux/film/asyncActions';
import { FavouriteFilmParams, FilmShortProps } from '../../redux/film/types';
import { useSelector } from 'react-redux';
import { selectLoginData } from '../../redux/Auth/selectors';

const ItemFilm = (props: FilmShortProps) => {
    const { data, statusAuth } = useSelector(selectLoginData);
    const dispatch = useAppDispatch();

    const onClickWatchLater = async () => {
        const film: FavouriteFilmParams = {id: data.id, filmId: props.id}
        await dispatch(fetchAddWatchLaterFilm(film));
    }

    const onClickFavourite = async () => {
        const film: FavouriteFilmParams = {id: data.id, filmId: props.id}
        await dispatch(fetchAddFavouriteFilm(film));
    }

    return (
        <div className={cl.post}>
                {statusAuth === 'completed' && 
                <>
                <img onClick={() => onClickFavourite() } className={cl.post__favourite} src={favourite} alt="Избранное" title="Избранное" />
                <img onClick={() => onClickWatchLater() } className={cl.post__later} src={later} alt="Смотреть позже" title="Смотреть позже" />
                </>}
                
                <Link to={`/film/${props.id}`}>
                    <img className={cl.post__poster} src={`https://localhost:44369/`+ props.pathPoster} alt="Название фильма(год)" title="Название фильма(год)" />
                </Link>
                <div className={cl.post__rating}>
                    <div className="rating">
                        <span><img src={star} alt='Rating'/></span>
                        <span><img src={star} alt='Rating'/></span>
                        <span><img src={star} alt='Rating'/></span>
                        <span><img src={star} alt='Rating'/></span>
                        <span><img src={star} alt='Rating'/></span>
                        <span><img src={star} alt='Rating'/></span>
                        <span><img src={star} alt='Rating'/></span>
                        <span><img src={star} alt='Rating'/></span>
                        <span><img src={star} alt='Rating'/></span>
                        <span><img src={star} alt='Rating'/></span>
                    </div>
                </div>
                <div className={cl.post__title}>{props.nameFilms}</div>
        </div>
    );
};

export default ItemFilm;