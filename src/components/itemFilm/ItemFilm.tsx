import { Link } from 'react-router-dom';
import cl from './ItemFilm.module.scss';
import favourite from '../../img/favourite.svg';
import later from '../../img/seeLater.svg';

type ItemFilmProps = {
    id: number,
    pathPoster: string,
    nameFilms: string
}

const ItemFilm = (props: ItemFilmProps) => {
    return (
        <div className={cl.post}>
                <img className={cl.post__favourite} src={favourite} alt="Избранное" title="Избранное" />
                <img className={cl.post__later} src={later} alt="Смотреть позже" title="Смотреть позже" />
                <Link to={`/film/${props.id}`}>
                    <img className={cl.post__poster} src={`https://localhost:44369/`+ props.pathPoster} alt="Название фильма(год)" title="Название фильма(год)" />
                </Link>
                <div className={cl.post__rating}>
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
                <div className={cl.post__title}>{props.nameFilms}</div>
        </div>
    );
};

export default ItemFilm;