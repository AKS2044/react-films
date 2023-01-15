import { useEffect, useRef, useState } from 'react'
import player1 from '../../img/player1.jpg';
import player2 from '../../img/player2.jpg';
import player3 from '../../img/player3.jpg';
import tr from '../../img/tr.jpg';
import rec from '../../img/recommended.jpg';
import { useAppDispatch } from '../../redux/store';
import { fetchAddCommentFilm, fetchDeleteCommentFilm, fetchFilmById, fetchGetCommentsFilm, fetchSetDislikeCommentFilm, fetchSetLikeCommentFilm } from '../../redux/film/asyncActions';
import { Link, useParams } from 'react-router-dom';
import { selectFilmData } from '../../redux/film/selectors';
import { useSelector } from 'react-redux';
import Button from '../../components/UI/button/Button';
import { selectIsAuth, selectLoginData } from '../../redux/Auth/selectors';
import Rating from '../../components/rating/Rating';
import { Status } from '../../enum/EnumStatus';
import Loader from '../../components/UI/loader/Loader';
import cl from './View.module.scss';
import { useForm } from 'react-hook-form';
import { CommentAddParams, CommentGetParams } from '../../redux/film/types';

const defaultValues: CommentAddParams = {
    comments: '',
    userName: '',
    pathPhoto: '',
    filmId: 0,
    userId: ''
}

const View = () => {
    const [addCommentOpen, setAddCommentOpen] = useState(false);
    const [comment, setComment] = useState('');
    const [playerId, setPlayerId] = useState(0);
    const params = useParams();
    
    const dispatch = useAppDispatch();
    const isAuth = useSelector(selectIsAuth);
    const { film, 
        filmStatus, 
        commentsData, 
        addCommentStatus, 
        getAllCommentsStatus,
        deleteCommentStatus,
        setLikeCommentStatus,
        setDislikeCommentStatus } = useSelector(selectFilmData);
    const { data } = useSelector(selectLoginData);
    
    const playerfilm = [
        {title: 'Плеер 1', linkPlayer: player1},
        {title: 'Плеер 2', linkPlayer: player2},
        {title: 'Плеер 3', linkPlayer: player3},
        {title: 'Трейлер', linkPlayer: tr},]

    const { 
        register, 
        handleSubmit, 
        resetField,
        formState: {}} = useForm({
        defaultValues: defaultValues,
        mode: 'onChange'
    });

    const onSubmit = async (values: CommentAddParams) => {
        values.filmId = film.id;
        values.userId = data.id;
        values.userName = data.userName;
        values.pathPhoto = data.pathPhoto;
        await dispatch(fetchAddCommentFilm(values));
        setComment('');
        resetField('comments');
    }

    const onClickDeleteComment = async (comment: CommentGetParams) => {
        if(comment.userName === data.userName || Boolean(data.roles.find((r) => r === 'Admin'))){
            if(window.confirm("Вы действительно хотите удалить комментарий?"))
            { 
                await dispatch(fetchDeleteCommentFilm({id: comment.id}));
            }
        }
    }

    const onChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    };

    const onClickLikeComment = async (comment: CommentGetParams) => {
        await dispatch(fetchSetLikeCommentFilm(comment));
    }

    const onClickDislikeComment = async (comment: CommentGetParams) => {
        await dispatch(fetchSetDislikeCommentFilm(comment));
    }

    const getComments = async () => {
        await dispatch(fetchGetCommentsFilm({filmId: Number(params.id)}));
    }

    const getFilm = async () => {
        await dispatch(fetchFilmById({id: Number(params.id)}));
    }

    useEffect(() => {
        getFilm();
        }, [params]);

    useEffect(() => {
        getComments()
        }, [addCommentStatus, deleteCommentStatus, setDislikeCommentStatus, setLikeCommentStatus, params]);

    return (
        <>
        {filmStatus === Status.LOADING
        ? <Loader />
        : <div className={cl.post}>
        <div className={cl.post__flex}>
        <div className={cl.post__left}>
            <img className={cl.post__left__poster} src={`https://localhost:44369/`+ film.pathPoster} alt="Постер" title="Постер" />
            <div className={cl.post__left__rating}>
                <div className={cl.post__left__rating__kinopoisk}>KP: <span>{film.ratingKinopoisk ? film.ratingKinopoisk : '0'}</span></div>
                <div className={cl.post__left__rating__imdb}>IMDB.COM: <span>{film.ratingImdb ? film.ratingImdb : '0'}</span></div>
            </div>
            <div className={cl.post__left__site}>
                <div className={cl.post__left__site__rating}>Рейтинг сайта: <span>{film.ratingSite ? film.ratingSite : '0'}</span></div>
                <div className={cl.border__menu}></div>
                <div className={cl.post__left__site__stars}>
                    <Rating 
                    width={25}
                    filmId={film.id}
                    userName={data.userName}
                    ratingSite={film.ratingSite}
                    />
                </div>
            </div>
        </div>
        <div className={cl.post__right}>
            <h2 className={cl.post__right__text__one}>{film.nameFilms}</h2>
            <div className={cl.post__right__text__two}>Год: <span className='post__text'>{film.releaseDate}</span></div>
            <div className={cl.post__right__text__one}>Жанр: <span className='post__text'>{film.genre.length ? film.genre.map((g) => g.genres + ' ') : 'Нет стран'}</span></div>
            <div className={cl.post__right__text__two}>Страна: <span className='post__text'>{film.country.length ? film.country.map((c) => c.country + ' ') : 'Нет стран'}</span></div>
            <div className={cl.post__right__text__one}>Режиссер: <span className='post__text'>{film.stageManagers.length ? film.stageManagers.map((m) => m.stageManagers) : 'Нет режиссеров'}</span></div>
            <div className={cl.post__right__text__two}>Возраст: <span className='post__text'>{film.ageLimit ? film.ageLimit : '0'} +</span></div>
            <div className={cl.post__right__text__one}>Время: <span className='post__text'>{film.time ? film.time : '0'} мин.</span></div>
            <div className={cl.post__right__text__two}>В главных ролях: <span className='post__text'>
                {film.actors.length ? film.actors.map((a) => a.firstName + ' ' + a.lastName + ' ') : 'Нет актеров'}</span></div>
            <div className={cl.post__right__text__one}>Качество видео: <span className='post__text'>BDRip</span></div>
            <div className={cl.post__right__text__two}>Перевод: <span className='post__text'>Дублированный</span></div>
            <div className={cl.post__right__text__one}>Описание: <span className='post__text'>{film.description ? film.description : 'Нет описания'}</span></div>
        </div>
        </div>
        <div className={cl.post__players}>
            <div className={cl.post__players__panel}>
                {playerfilm.map((p: any, index) => 
                    <button 
                    key={index} 
                    onClick={() => setPlayerId(index)} 
                    className={playerId === index ? `${cl.post__players__panel__button} ${cl.active}` : `${cl.post__players__panel__button}`}
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
        <div className={cl.post__recommended}>
            <div className={cl.post__recommended__title}>Мы рекомендуем:</div>
            <div className={cl.post__recommended__block}>
                <div className={cl.post__recommended__block__film}>
                    <a href='/'><img className={cl.post__recommended__block__film__poster} src={rec} alt="Постер" title="Постер" /></a>
                    <div className={cl.post__recommended__block__film__text}>Название фильма(год)</div>
                </div>
                <div className={cl.post__recommended__block__film}>
                    <a href='/'><img className={cl.post__recommended__block__film__poster} src={rec} alt="Постер" title="Постер" /></a>
                    <div className={cl.post__recommended__block__film__text}>Название фильма(год)</div>
                </div>
                <div className={cl.post__recommended__block__film}>
                    <a href='/'><img className={cl.post__recommended__block__film__poster} src={rec} alt="Постер" title="Постер" /></a>
                    <div className={cl.post__recommended__block__film__text}>Название фильма(год)</div>
                </div>
                <div className={cl.post__recommended__block__film}>
                    <a href='/'><img className={cl.post__recommended__block__film__poster} src={rec} alt="Постер" title="Постер" /></a>
                    <div className={cl.post__recommended__block__film__text}>Название фильма(год)</div>
                </div>
                <div className={cl.post__recommended__block__film}>
                    <a href='/'><img className={cl.post__recommended__block__film__poster} src={rec} alt="Постер" title="Постер" /></a>
                    <div className={cl.post__recommended__block__film__text}>Название фильма(год)</div>
                </div>
                <div className={cl.post__recommended__block__film}>
                    <a href='/'><img className={cl.post__recommended__block__film__poster} src={rec} alt="Постер" title="Постер" /></a>
                    <div className={cl.post__recommended__block__film__text}>Название фильма(год)</div>
                </div>
            </div>
        </div>
        <div className={cl.post__comments}>
            <div className={cl.post__comments__panel}>
                <button className={cl.post__comments__panel__button} onClick={() => setAddCommentOpen(!addCommentOpen)}>Добавить комментарий</button>
                <div className={cl.post__comments__panel__number}>{commentsData.length}</div>
            </div>
            {addCommentOpen && 
            <>
            {isAuth 
            ? <form method="post" onSubmit={handleSubmit(onSubmit)} className={cl.post__comments__block}>
                <div className={cl.post__comments__block__flex} >
                    <textarea
                    {...register('comments', {required: 'Введите комментарий'})}
                    value={comment} 
                    maxLength={500}
                    onChange= {(e: React.ChangeEvent<HTMLTextAreaElement>) => onChangeTextArea(e)}
                    />
                    <div className={cl.post__comments__block__flex__emodji}></div>
                </div>
                <Button>Добавить</Button>
            </form>
            : <div className={cl.post__comments__unauth}>
                Вы не зарегистрированы! <Link className={cl.post__comments__unauth__link} to="/login">Авторизуйтесь</Link> или <Link className={cl.post__comments__unauth__link} to="/register">зарегистрируйтесь</Link>, чтобы оставить комментарий.
            </div>}
            </>}
            <div className={cl.post__comments__comment}>
                {getAllCommentsStatus === 'loading'
                ? <div>Загрузка...</div>
                : 
                <>
                    {commentsData.map((c) => 
                    <div
                    className={cl.post__comments__comment__main}
                    key={c.id}>
                            <img className={cl.post__comments__comment__main__photo} src={`https://localhost:44369/`+ c.pathPhoto} alt="Фото" title="Фото" />
                            <div className={cl.post__comments__comment__main__block} >
                                <div className={cl.post__comments__comment__main__block__info}>
                                    <div className={cl.post__comments__comment__main__block__info__nick}>{c.userName}</div>
                                    <div className={cl.post__comments__comment__main__block__info__date}>{c.dateSet}</div>
                                </div>
                                <div className={cl.post__comments__comment__main__block__text}>{c.comments}</div>
                                
                            </div>
                            {isAuth && <>
                                {(data.userName === c.userName || Boolean(data.roles.find((r) => r === 'Admin'))) && 
                            <div onClick={() => onClickDeleteComment(c)} className={cl.post__comments__comment__main__delete}>⛌</div>}
                            </>}
                            <div onClick={() => onClickLikeComment(c)} className={cl.post__comments__comment__main__plus}>+ {c.like}</div>
                            <div onClick={() => onClickDislikeComment(c)} className={cl.post__comments__comment__main__minus}>- {c.dislike}</div>
                    </div>)}
                </>}
            </div>
            <Button>Больше комментариев</Button>
        </div>
        </div>}
        </>
        
    );
};

export default View;