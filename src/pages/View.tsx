import { useEffect, useState } from 'react'
import player1 from '../img/player1.jpg';
import player2 from '../img/player2.jpg';
import player3 from '../img/player3.jpg';
import tr from '../img/tr.jpg';
import rec from '../img/recommended.jpg';
import photoUser from '../img/Rick.png';
import { useAppDispatch } from '../redux/store';
import { fetchFilmById } from '../redux/film/asyncActions';
import { useParams } from 'react-router-dom';
import { selectFilmData } from '../redux/film/selectors';
import { useSelector } from 'react-redux';
import Button from '../components/UI/button/Button';
import { selectLoginData } from '../redux/Auth/selectors';
import Rating from '../components/rating/Rating';

const View = () => {
    const playerfilm = [
        {title: 'Плеер 1', linkPlayer: player1},
        {title: 'Плеер 2', linkPlayer: player2},
        {title: 'Плеер 3', linkPlayer: player3},
        {title: 'Трейлер', linkPlayer: tr},]

    const [playerId, setPlayerId] = useState(0);
    console.log(playerId)
    const params = useParams();
    const { data } = useSelector(selectLoginData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchFilmById({id: Number(params.id)}))
        }, [params]);
    
    const { film } = useSelector(selectFilmData);
    return (
        <div className='post'>
            <div className='post__flex'>
            <div className='post__left'>
                <img className='post__left-poster' src={`https://localhost:44369/`+ film.pathPoster} alt="Постер" title="Постер" />
                <div className='post__left-rating'>
                    <div className='post__left-rating-kinopoisk'>KP: <span className='post__rating-color'>{film.ratingKinopoisk ? film.ratingKinopoisk : '0'}</span></div>
                    <div className='post__left-rating-imdb'>IMDB.COM: <span className='post__rating-color'>{film.ratingImdb ? film.ratingImdb : '0'}</span></div>
                </div>
                <div className='post__left-site'>
                    <div className='post__left-site-rating'>Рейтинг сайта: <span className='post__rating-color'>{film.ratingSite ? film.ratingSite : '0'}</span></div>
                    <div className='border-menu'></div>
                    <div className='post__left-site-stars'>
                        <Rating 
                        width={25}
                        filmId={film.id}
                        userName={data.userName}
                        ratingSite={film.ratingSite}
                        />
                    </div>
                </div>
            </div>
            <div className='post__right'>
                <h2 className='post__right-text-one'>{film.nameFilms}</h2>
                <div className='post__right-text-two'>Год: <span className='post__text'>{film.releaseDate}</span></div>
                <div className='post__right-text-one'>Жанр: <span className='post__text'>{film.genre ? film.genre.map((g) => g + ' ') : 'Нет стран'}</span></div>
                <div className='post__right-text-two'>Страна: <span className='post__text'>{film.country ? film.country.map((c) => c + ' ') : 'Нет стран'}</span></div>
                <div className='post__right-text-one'>Режиссер: <span className='post__text'>{film.stageManagers ? film.stageManagers.map((m) => m) : 'Нет режиссеров'}</span></div>
                <div className='post__right-text-two'>Возраст: <span className='post__text'>{film.ageLimit ? film.ageLimit : '0'} +</span></div>
                <div className='post__right-text-one'>Время: <span className='post__text'>{film.time ? film.time : '0'} мин.</span></div>
                <div className='post__right-text-two'>В главных ролях: <span className='post__text'>
                    {film.actors ? film.actors.map((a) => a.firstName + ' ' + a.lastName + ' ') : 'Нет актеров'}</span></div>
                <div className='post__right-text-one'>Качество видео: <span className='post__text'>BDRip</span></div>
                <div className='post__right-text-two'>Перевод: <span className='post__text'>Дублированный</span></div>
                <div className='post__right-text-one'>Описание: <span className='post__text'>{film.description ? film.description : 'Нет описания'}</span></div>
            </div>
            </div>
            <div className='post__players'>
                <div className='post__players-panel'>
                    {playerfilm.map((p: any, index) => 
                        <button 
                        key={index} 
                        onClick={() => setPlayerId(index)} 
                        className={playerId === index ? 'post__players-panel-button active' : 'post__players-panel-button'}
                        >
                            {p.title}
                        </button>)}
                </div>
                <div>
                    {playerId === 0 && <img src={player1} alt='Плеер 1' />}
                    {playerId === 1 && <iframe width="560" height="315" src={film.linkFilmtrailer} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>}
                    {playerId === 2 && <iframe width="560" height="315" src={film.linkFilmtrailer} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>}
                    {playerId === 3 && <iframe  width="100%" height="400" src={film.linkFilmtrailer} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>}
                </div>
            </div>
            <div className='post__recommended'>
                <div className='post__recommended-title'>Мы рекомендуем:</div>
                <div className='post__recommended-block'>
                    <div className='post__recommended-block-film'>
                        <a href='/'><img className='post__recommended-block-film-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='post__recommended-block-film-text'>Название фильма(год)</div>
                    </div>
                    <div className='post__recommended-block-film'>
                        <a href='/'><img className='post__recommended-block-film-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='post__recommended-block-film-text'>Название фильма(год)</div>
                    </div>
                    <div className='post__recommended-block-film'>
                        <a href='/'><img className='post__recommended-block-film-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='post__recommended-block-film-text'>Название фильма(год)</div>
                    </div>
                    <div className='post__recommended-block-film'>
                        <a href='/'><img className='post__recommended-block-film-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='post__recommended-block-film-text'>Название фильма(год)</div>
                    </div>
                    <div className='post__recommended-block-film'>
                        <a href='/'><img className='post__recommended-block-film-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='post__recommended-block-film-text'>Название фильма(год)</div>
                    </div>
                    <div className='post__recommended-block-film'>
                        <a href='/'><img className='post__recommended-block-film-poster' src={rec} alt="Постер" title="Постер" /></a>
                        <div className='post__recommended-block-film-text'>Название фильма(год)</div>
                    </div>
                </div>
            </div>
            <div className='post__comments'>
                <div className='post__comments-panel'>
                <Button>Добавить комментарий</Button>
                    <div className='post__comments-panel-number'>3</div>
                </div>
                <div className='post__comments-block'>
                    <div className='post__comments-block-flex'>
                        <input className='post__comments-block-flex-text' />
                        <div className='post__comments-block-flex-emodji'></div>
                    </div>
                    <Button>Добавить</Button>
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
                <Button>Больше комментариев</Button>
            </div>
        </div>
    );
};

export default View;