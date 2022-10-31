import { useEffect } from 'react'
import player from '../img/player.jpg';
import rec from '../img/recommended.jpg';
import photoUser from '../img/Rick.png';
import { useAppDispatch } from '../redux/store';
import { fetchFilmById } from '../redux/film/asyncActions';
import { useParams } from 'react-router-dom';
import { selectFilmData } from '../redux/film/selectors';
import { useSelector } from 'react-redux';

const View = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchFilmById({id: Number(params.id)}))
        }, [params]);

    
    const { item, status } = useSelector(selectFilmData);
    console.log(item)
    return (
        <div className='post'>
            <div className='post__flex'>
            <div className='post__left'>
                <img className='post__left-poster' src={`https://localhost:44369/`+ item.pathPoster} alt="Постер" title="Постер" />
                <div className='post__left-rating'>
                    <div className='post__left-rating-kinopoisk'>KP: <span className='post__rating-color'>{item.ratingKinopoisk ? item.ratingKinopoisk : '0'}</span></div>
                    <div className='post__left-rating-imdb'>IMDB.COM: <span className='post__rating-color'>{item.ratingImdb ? item.ratingImdb : '0'}</span></div>
                </div>
                <div className='post__left-site'>
                    <div className='post__left-site-rating'>Рейтинг сайта: <span className='post__rating-color'>{item.ratingSite ? item.ratingSite : '0'}</span></div>
                    <div className='border-menu'></div>
                    <div className='post__left-site-stars'>
                    <svg width="22" height="22" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 0L10.4084 5.52786H16.584L11.5878 8.94427L13.4962 14.4721L8.5 11.0557L3.50383 14.4721L5.41219 8.94427L0.416019 5.52786H6.59163L8.5 0Z" fill="#F5C518"/>
                    </svg>
                    <svg width="22" height="22" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 0L10.4084 5.52786H16.584L11.5878 8.94427L13.4962 14.4721L8.5 11.0557L3.50383 14.4721L5.41219 8.94427L0.416019 5.52786H6.59163L8.5 0Z" fill="#F5C518"/>
                    </svg>
                    <svg width="22" height="22" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 0L10.4084 5.52786H16.584L11.5878 8.94427L13.4962 14.4721L8.5 11.0557L3.50383 14.4721L5.41219 8.94427L0.416019 5.52786H6.59163L8.5 0Z" fill="#F5C518"/>
                    </svg>
                    <svg width="22" height="22" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 0L10.4084 5.52786H16.584L11.5878 8.94427L13.4962 14.4721L8.5 11.0557L3.50383 14.4721L5.41219 8.94427L0.416019 5.52786H6.59163L8.5 0Z" fill="#F5C518"/>
                    </svg>
                    <svg width="22" height="22" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 0L10.4084 5.52786H16.584L11.5878 8.94427L13.4962 14.4721L8.5 11.0557L3.50383 14.4721L5.41219 8.94427L0.416019 5.52786H6.59163L8.5 0Z" fill="#F5C518"/>
                    </svg>
                    <svg width="22" height="22" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 0L10.4084 5.52786H16.584L11.5878 8.94427L13.4962 14.4721L8.5 11.0557L3.50383 14.4721L5.41219 8.94427L0.416019 5.52786H6.59163L8.5 0Z" fill="#F5C518"/>
                    </svg>
                    <svg width="22" height="22" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 0L10.4084 5.52786H16.584L11.5878 8.94427L13.4962 14.4721L8.5 11.0557L3.50383 14.4721L5.41219 8.94427L0.416019 5.52786H6.59163L8.5 0Z" fill="#F5C518"/>
                    </svg>
                    <svg width="22" height="22" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 0L10.4084 5.52786H16.584L11.5878 8.94427L13.4962 14.4721L8.5 11.0557L3.50383 14.4721L5.41219 8.94427L0.416019 5.52786H6.59163L8.5 0Z" fill="#F5C518"/>
                    </svg>
                    <svg width="22" height="22" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 0L10.4084 5.52786H16.584L11.5878 8.94427L13.4962 14.4721L8.5 11.0557L3.50383 14.4721L5.41219 8.94427L0.416019 5.52786H6.59163L8.5 0Z" fill="#F5C518"/>
                    </svg>
                    </div>
                </div>
            </div>
            <div className='post__right'>
                <h2 className='post__right-text-one'>{item.nameFilms}</h2>
                <div className='post__right-text-two'>Год: <span className='post__text'>{item.releaseDate}</span></div>
                <div className='post__right-text-one'>Жанр: <span className='post__text'>{item.genre ? item.genre.map((g) => g + ' ') : 'Нет стран'}</span></div>
                <div className='post__right-text-two'>Страна: <span className='post__text'>{item.country ? item.country.map((c) => c + ' ') : 'Нет стран'}</span></div>
                <div className='post__right-text-one'>Режиссер: <span className='post__text'>{item.stageManagers ? item.stageManagers.map((m) => m) : 'Нет режиссеров'}</span></div>
                <div className='post__right-text-two'>Возраст: <span className='post__text'>{item.ageLimit ? item.ageLimit : '0'} +</span></div>
                <div className='post__right-text-one'>Время: <span className='post__text'>{item.time ? item.time : '0'} мин.</span></div>
                <div className='post__right-text-two'>В главных ролях: <span className='post__text'>Дэниэл Крэйг, Ана де Армас, Крис Эванс, Джейми Ли Кёртис</span></div>
                <div className='post__right-text-one'>Качество видео: <span className='post__text'>BDRip</span></div>
                <div className='post__right-text-two'>Перевод: <span className='post__text'>Дублированный</span></div>
                <div className='post__right-text-one'>Описание: <span className='post__text'>{item.description ? item.description : 'Нет описания'}</span></div>
            </div>
            </div>
            <div className='post__players'>
                <div className='post__players-panel'>
                    <button className='post__players-panel-button active'>Плеер 1</button>
                    <button className='post__players-panel-button'>Плеер 2</button>
                    <button className='post__players-panel-button'>Плеер 3</button>
                    <button className='post__players-panel-button'>Трейлер</button>
                </div>
                <img className='post__players-player' src={player} alt="Постер" title="Постер" />
            </div>
            <div className='post__recommended'>
                <div className='post__recommended-title'>Мы рекомендуем:</div>
                <div className='post__recommended-block'>
                    <div className='post__recommended-block-item'>
                        <a href='/'><img className='post__recommended-block-item-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='post__recommended-block-item-text'>Название фильма(год)</div>
                    </div>
                    <div className='post__recommended-block-item'>
                        <a href='/'><img className='post__recommended-block-item-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='post__recommended-block-item-text'>Название фильма(год)</div>
                    </div>
                    <div className='post__recommended-block-item'>
                        <a href='/'><img className='post__recommended-block-item-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='post__recommended-block-item-text'>Название фильма(год)</div>
                    </div>
                    <div className='post__recommended-block-item'>
                        <a href='/'><img className='post__recommended-block-item-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='post__recommended-block-item-text'>Название фильма(год)</div>
                    </div>
                    <div className='post__recommended-block-item'>
                        <a href='/'><img className='post__recommended-block-item-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='post__recommended-block-item-text'>Название фильма(год)</div>
                    </div>
                    <div className='post__recommended-block-item'>
                        <a href='/'><img className='post__recommended-block-item-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='post__recommended-block-item-text'>Название фильма(год)</div>
                    </div>
                </div>
            </div>
            <div className='post__comments'>
                <div className='post__comments-panel'>
                    <button className='post__comments-panel-add'>Добавить комментарий</button>
                    <div className='post__comments-panel-number'>3</div>
                </div>
                <div className='post__comments-block'>
                    <div className='post__comments-block-flex'>
                        <input className='post__comments-block-flex-text' />
                        <div className='post__comments-block-flex-emodji'></div>
                    </div>
                    <button className='post__comments-block-put'>Добавить</button>
                </div>
                <div className='post__comments-comment'>
                    <div className='post__comments-comment-main'>
                        <img className='post__comments-comment-main-photo' src={photoUser} alt="Фото" title="Фото" />
                        <div className='post__comments-comment-main-block'>
                            <div className='post__comments-comment-main-block-info'>
                                <div className='post__comments-comment-main-block-info-nick'>Kent3000</div>
                                <div className='post__comments-comment-main-block-info-date'>06.07.2022, 14:21</div>
                            </div>
                            <div className='post__comments-comment-main-block-text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</div>
                            
                        </div>
                        <svg className='post__comments-comment-main-more-comments' width="16" height="16" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 6L0.937822 -1.88258e-07L13.0622 8.71687e-07L7 6Z" fill="white"/>
                        </svg>
                        <div className='post__comments-comment-main-plus'>+ 15</div>
                        <div className='post__comments-comment-main-minus'>- 50</div>
                        <div className='post__comments-comment-main-num'>20</div>
                        <button className='post__comments-comment-main-answer'>Ответить</button>
                    </div>
                    <div className='post__comments-comment-dop'>
                    <img className='post__comments-comment-dop-photo' src={photoUser} alt="Фото" title="Фото" />
                        <div className='post__comments-comment-dop-block'>
                            <div className='post__comments-comment-dop-block-info'>
                                <div className='post__comments-comment-dop-block-info-nick'>Kent3000</div>
                                <div className='post__comments-comment-dop-block-info-date'>06.07.2022, 14:21</div>
                            </div>
                            <div className='post__comments-comment-dop-block-text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</div>
                            
                        </div>
                        {/* <svg className='post__comments-comment-dop-more-comments' width="16" height="16" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 6L0.937822 -1.88258e-07L13.0622 8.71687e-07L7 6Z" fill="white"/>
                        </svg> */}
                        <div className='post__comments-comment-dop-plus'>+ 15</div>
                        <div className='post__comments-comment-dop-minus'>- 50</div>
                        <div className='post__comments-comment-dop-num'>20</div>
                        <button className='post__comments-comment-dop-answer'>Ответить</button>
                    </div>
                    <div className='post__comments-comment-dop'>
                    <img className='post__comments-comment-dop-photo' src={photoUser} alt="Фото" title="Фото" />
                        <div className='post__comments-comment-dop-block'>
                            <div className='post__comments-comment-dop-block-info'>
                                <div className='post__comments-comment-dop-block-info-nick'>Kent3000</div>
                                <div className='post__comments-comment-dop-block-info-date'>06.07.2022, 14:21</div>
                            </div>
                            <div className='post__comments-comment-dop-block-text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</div>
                            
                        </div>
                        {/* <svg className='post__comments-comment-dop-more-comments' width="16" height="16" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 6L0.937822 -1.88258e-07L13.0622 8.71687e-07L7 6Z" fill="white"/>
                        </svg> */}
                        <div className='post__comments-comment-dop-plus'>+ 15</div>
                        <div className='post__comments-comment-dop-minus'>- 50</div>
                        <div className='post__comments-comment-dop-num'>20</div>
                        <button className='post__comments-comment-dop-answer'>Ответить</button>
                    </div>
                </div>
                <button className='post__comments-more'>Больше комментариев</button>
            </div>
        </div>
    );
};

export default View;