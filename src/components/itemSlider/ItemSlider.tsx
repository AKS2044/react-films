import cl from './ItemSlider.module.scss';
import img from '../../img/posterSlider.jpg'
import { Link } from 'react-router-dom';

type ItemSliderProps = {
    id: number,
    pathPoster: string,
    nameFilms: string
    offset: number
}

const ItemSlider = (props: ItemSliderProps) => {
    return (
        <div style={{transform: `translateX(${props.offset}px)`}} className={cl.slide}>
            <Link to={`/film/${props.id}`}>
            {/* <img className={cl.poster__slider} src={`https://localhost:44369/`+ film.pathPoster} alt="Название фильма(год)" title="Название фильма(год)" />
            */
            <img className={cl.slide__poster} src={img} alt="Название фильма(год)" title="Название фильма(год)" />}
            </Link>
            <div className={cl.slide__title}>{props.nameFilms}</div>
        </div>
    );
};

export default ItemSlider;