import { Alert, TextField } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/button/Button';
import { selectLoginData } from '../../redux/Auth/selectors';
import { fetchFilms } from '../../redux/film/asyncActions';
import { selectFilmData } from '../../redux/film/selectors';
import { Film, FilmShortProps } from '../../redux/film/types';
import { fetchDeleteActors, fetchDeleteCountries, fetchDeleteFilm, fetchDeleteGenre, fetchDeleteManagers, fetchGetActors, fetchGetCountries, fetchGetGenres, fetchGetManagers, fetchPostActors, fetchPostCountries, fetchPostGenre, fetchPostManagers } from '../../redux/filmAdmin/asyncActions';
import { selectFilmAdminData } from '../../redux/filmAdmin/selectors';
import { ActorPayloadParams, CountryPayloadParams, GenrePayloadParams, ManagerPayloadParams } from '../../redux/filmAdmin/types';
import { selectFilter } from '../../redux/filter/selectors';
import { useAppDispatch } from '../../redux/store';
import { fetchDeleteUser, fetchGetUsers } from '../../redux/userAdmin/asyncActions';
import { selectUserAdmin } from '../../redux/userAdmin/selectors';
import { Users } from '../../redux/userAdmin/types';
import cl from './Admin.module.scss';

type Props = {
    genre: GenrePayloadParams,
    country: CountryPayloadParams,
    manager: ManagerPayloadParams,
    actor: ActorPayloadParams,
    film: Film
}

const defaultValues: Props = {
    genre: {id: 0, genres: ''},
    country: {id: 0, country: ''},
    manager: {id: 0, stageManagers: ''},
    actor: {id: 0, firstName: '', lastName: '', secondName: ''},
    film: {
        id : 0,
        nameFilms: '',
        ageLimit: 0,
        releaseDate: 0,
        linkFilmPlayer: '',
        linkFilmtrailer: '',
        ratingKinopoisk : '',
        ratingSite : 0,
        ratingImdb : '',
        country: [],
        actors: [],
        genre: [],
        stageManagers: [],
        description: '',
        time: 0,
        pathPoster: '',
        imageName: ''
    }
}

const Admin = () => {
    const [filmPanelOpen, setFilmPanelOpen] = useState(false);
    const [userPanelOpen, setUserPanelOpen] = useState(false);

    const [userGetOpen, setUserGetOpen] = useState(false);

    const [genrePanelOpen, setGenrePanelOpen] = useState(false);
    const [countryPanelOpen, setCountryPanelOpen] = useState(false);
    const [managerPanelOpen, setManagerPanelOpen] = useState(false);
    const [actorPanelOpen, setActorPanelOpen] = useState(false);
    const [filmsPanelOpen, setFilmsPanelOpen] = useState(false);

    const dispatch = useAppDispatch();

    const { 
        register,
        handleSubmit, 
        formState: {errors, isValid}} = useForm({
        defaultValues: defaultValues,
        mode: 'onChange'
    });

    const { 
        filmDeleteStatus,
        genreData,
        genrePostStatus,
        genreDeleteStatus,
        countryData, 
        countryPostStatus,
        countryDeleteStatus,
        managerData,
        managerPostStatus,
        managerDeleteStatus,
        actorData,
        actorPostStatus,
        actorDeleteStatus,} = useSelector(selectFilmAdminData);

        const [valueUser, setValueUser] = useState('');
        const userRef = useRef<HTMLInputElement>(null);

        const { films, filmsStatus } = useSelector(selectFilmData);
        const { data } = useSelector(selectLoginData);
        const { users, userDeleteStatus } = useSelector(selectUserAdmin);
        const { currentPage } = useSelector(selectFilter);

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, set: React.Dispatch<React.SetStateAction<string>>) => {
        set(event.target.value);
    };

    const onClickClear = (inputRef: React.RefObject<HTMLInputElement>, setProps: React.Dispatch<React.SetStateAction<string>>) => {
        setProps('');
        inputRef.current?.focus();
    };

    const onSubmitGenre = async (props: Props) => {
        await dispatch(fetchPostGenre(props.genre));
    }

    const onSubmitContry = async (props: Props) => {
        const result = Boolean(countryData.find((f) => f.country === props.country.country));
        
        if(!result){
            await dispatch(fetchPostCountries(props.country));
        }else{
            alert('Уже существует')
        }
    }

    const onSubmitManager = async (props: Props) => {
        const result = Boolean(managerData.find((f) => f.stageManagers === props.manager.stageManagers))
        if(!result){
            await dispatch(fetchPostManagers(props.manager));
        }else{
            alert('Уже существует')
        }
    }

    const onSubmitActor = async (props: Props) => {
        const result = Boolean(actorData.find((f) => 
        f.firstName === props.actor.firstName 
        && f.lastName === props.actor.lastName))
        if(!result){
            await dispatch(fetchPostActors(props.actor));
        }else{
            alert('Уже существует')
        }
    }

    const onClickDeleteGenre = async (genre: GenrePayloadParams) => {
        if(window.confirm("Вы действительно хотите удалить жанр?"))
        { 
            await dispatch(fetchDeleteGenre(genre));
        }
    }

    const onClickDeleteCountry = async (country: CountryPayloadParams) => {
        if(window.confirm("Вы действительно хотите удалить страну?"))
        { 
            await dispatch(fetchDeleteCountries(country));
        }
    }

    const onClickDeleteManager = async (manager: ManagerPayloadParams) => {
        if(window.confirm("Вы действительно хотите удалить режиссера?"))
        { 
            await dispatch(fetchDeleteManagers(manager));
        }
    }

    const onClickDeleteActor = async (actor: ActorPayloadParams) => {
        if(window.confirm("Вы действительно хотите удалить актера?"))
        { 
            await dispatch(fetchDeleteActors(actor));
        }
    }

    const onClickDeleteFilm = async (film: FilmShortProps) => {
        if(window.confirm("Вы действительно хотите удалить фильм?"))
        { 
            await dispatch(fetchDeleteFilm(film));
        }
    }

    const onClickDeleteUser = async (user: Users) => {
        if(user.userName === data.userName)
        { 
            alert('Вы не можете удалить себя')
        }else{
            if(window.confirm("Вы действительно хотите удалить пользователя"))
            { 
                await dispatch(fetchDeleteUser(user));
            }
        }
    }

    const getUsers = users.filter(obj => {
        if(obj.userName.toLowerCase().includes(valueUser.toLowerCase())){
            return true;
        }
        return false;
    });

    useEffect(() => {
        dispatch(fetchGetGenres());
    }, [genrePostStatus, genreDeleteStatus]);

    useEffect(() => {
        dispatch(fetchGetCountries());
    }, [countryPostStatus, countryDeleteStatus]);

    useEffect(() => {
        dispatch(fetchGetManagers());
    }, [managerPostStatus, managerDeleteStatus]);

    useEffect(() => {
        dispatch(fetchGetActors());
    }, [actorPostStatus, actorDeleteStatus]);

    useEffect(() => {
        dispatch(fetchGetUsers());
    }, [userDeleteStatus]);

    useEffect(() => {
        dispatch(fetchFilms({ currentPage: currentPage}));
    }, []);

    return (
        <div className={cl.admin}>
            <div className={cl.admin__title}>Админ панель</div>
            <div className={cl.admin__block}>
                <button onClick={() => setFilmPanelOpen(!filmPanelOpen)} className={cl.admin__block__links}>Фильмы</button>
                <button onClick={() => setUserPanelOpen(!userPanelOpen)} className={cl.admin__block__links}>Пользователи</button>
            </div>
            <div className={cl.admin__menu}>
                <div className={cl.admin__menu__left}>
                    {filmPanelOpen && 
                    <div className={cl.admin__menu__block}>
                        <Link className={cl.admin__menu__block__links} to='/addfilm'>Добавить фильм</Link>
                        <button onClick={() => setGenrePanelOpen(!genrePanelOpen)} className={cl.admin__menu__block__links}>Редактировать жанры</button>
                        <button onClick={() => setCountryPanelOpen(!countryPanelOpen)} className={cl.admin__menu__block__links}>Редактировать страны</button>
                        <button onClick={() => setManagerPanelOpen(!managerPanelOpen)} className={cl.admin__menu__block__links}>Редактировать режиссеров</button>
                        <button onClick={() => setActorPanelOpen(!actorPanelOpen)} className={cl.admin__menu__block__links}>Редактировать актеров</button>
                        <button onClick={() => setFilmsPanelOpen(!filmsPanelOpen)} className={cl.admin__menu__block__links}>Редактировать фильмы</button>
                    </div>}
                </div>
                <div className={cl.admin__menu__right}>
                    {userPanelOpen && 
                    <div className={cl.admin__menu__block}>
                        <button onClick={() => setUserGetOpen(!userGetOpen)} className={cl.admin__menu__block__links} >Все пользователи</button>
                        <Link className={cl.admin__menu__block__links} to='/'>Text2</Link>
                        <Link className={cl.admin__menu__block__links} to='/'>Text2</Link>
                        <Link className={cl.admin__menu__block__links} to='/'>Text2</Link>
                    </div>}
                </div>
            </div>
            {userGetOpen && 
            <div className={cl.admin__change}>
                    {userDeleteStatus === 'completed' && 
                    <Alert className={cl.alert} variant="filled" severity="success">
                        Пользователь успешно — <strong>удален</strong>
                    </Alert>}
                    {userDeleteStatus === 'error' && 
                    <Alert className={cl.alert} variant="filled" severity="error">
                        Что-то пошло — <strong>не так</strong>
                    </Alert>}
                    <div className={cl.search__user}>
                        <TextField  
                                InputProps={{className: cl.input}} 
                                InputLabelProps={{className: cl.input__label}} 
                                inputRef={userRef}
                                value={valueUser} 
                                label="Поиск по логину"
                                size="small"
                                fullWidth
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e, setValueUser)}/>
                        {valueUser && <div className={cl.search__user__cross} onClick={() => onClickClear(userRef, setValueUser) }></div>}
                    </div>
                    <ul className={cl.admin__change__ul}>
                        <li>№</li>
                        <li>Логин</li>
                        <li>Роль</li>
                        <li>Дата регистрации</li>
                        <li>Страна</li>
                        <li>Удалить</li>
                    </ul>
                <div className={cl.admin__change__list}>
                    {getUsers.map((u, index) => 
                    <ul key={u.id} className={cl.admin__change__list__film}>
                        <li>{index + 1}</li>
                        <li>{u.userName}</li>
                        <li>{u.roles}</li>
                        <li>{u.dateReg}</li>
                        <li>{u.city}</li>
                        <button onClick={() => onClickDeleteUser(u)}  className={cl.admin__change__list__button}>
                                    --
                        </button>
                    </ul>)}
                </div>
            </div>}
            {genrePanelOpen && 
            <div className={cl.admin__change}>
                    <form className={cl.admin__change__form} onSubmit={handleSubmit(onSubmitGenre)}>
                        <TextField  
                            InputProps={{className: cl.input}} 
                            InputLabelProps={{className: cl.input__label}} 
                            label="Добавить жанр"
                            size="small"
                            fullWidth
                            error={Boolean(errors.genre?.genres?.message)}
                            helperText={errors.genre?.genres?.message}
                            {...register('genre.genres', {required: 'Введите жанр'})}  />
                        <Button disabled={isValid}>Добавить</Button>
                    </form>
                    
                    {genrePostStatus === 'completed' && 
                    <Alert className={cl.alert} variant="filled" severity="success">
                        Жанр успешно — <strong>добавлен</strong>
                    </Alert>}
                    {genrePostStatus === 'error' && 
                    <Alert className={cl.alert} variant="filled" severity="error">
                        Что-то пошло — <strong>не так</strong>
                    </Alert>}
                    {genreDeleteStatus === 'completed' && 
                    <Alert className={cl.alert} variant="filled" severity="success">
                        Жанр успешно — <strong>удален</strong>
                    </Alert>}
                    {genreDeleteStatus === 'error' && 
                    <Alert className={cl.alert} variant="filled" severity="error">
                        Что-то пошло — <strong>не так</strong>
                    </Alert>}
                    <div className={cl.admin__change__list}>
                        {genreData.map((g) => <div key={g.id} className={cl.admin__change__list__item}>{g.genres}<button onClick={() => onClickDeleteGenre(g)} className={cl.admin__change__list__button}>--</button></div>)}
                    </div>
            </div>}
            {countryPanelOpen && 
            <div className={cl.admin__change}>
                    <form className={cl.admin__change__form} onSubmit={handleSubmit(onSubmitContry)}>
                        <TextField  
                            InputProps={{className: cl.input}} 
                            InputLabelProps={{className: cl.input__label}} 
                            label="Добавить страну"
                            size="small"
                            fullWidth
                            error={Boolean(errors.country?.country?.message)}
                            helperText={errors.country?.country?.message}
                            {...register('country.country', {required: 'Введите страну'})}  />
                        <Button>Добавить</Button>
                    </form>
                    
                    {countryPostStatus === 'completed' && 
                    <Alert className={cl.alert} variant="filled" severity="success">
                        Страна успешно — <strong>добавлена</strong>
                    </Alert>}
                    {countryPostStatus === 'error' && 
                    <Alert className={cl.alert} variant="filled" severity="error">
                        Что-то пошло — <strong>не так</strong>
                    </Alert>}
                    {countryDeleteStatus === 'completed' && 
                    <Alert className={cl.alert} variant="filled" severity="success">
                        Страна успешно — <strong>удален</strong>
                    </Alert>}
                    {countryDeleteStatus === 'error' && 
                    <Alert className={cl.alert} variant="filled" severity="error">
                        Что-то пошло — <strong>не так</strong>
                    </Alert>}
                    <div className={cl.admin__change__list}>
                        {countryData.map((c) => <div key={c.id} className={cl.admin__change__list__item}>{c.country}<button onClick={() => onClickDeleteCountry(c)} className={cl.admin__change__list__button}>--</button></div>)}
                    </div>
            </div>}
            {managerPanelOpen && 
            <div className={cl.admin__change}>
                        <form className={cl.admin__change__form} onSubmit={handleSubmit(onSubmitManager)}>
                            <TextField  
                                InputProps={{className: cl.input}} 
                                InputLabelProps={{className: cl.input__label}} 
                                label="Добавить режиссера"
                                size="small"
                                fullWidth
                                error={Boolean(errors.manager?.stageManagers?.message)}
                                helperText={errors.manager?.stageManagers?.message}
                                {...register('manager.stageManagers', {required: 'Введите режиссера'})}  />
                            <Button disabled={isValid}>Добавить</Button>
                        </form>
                        
                        {managerPostStatus === 'completed' && 
                        <Alert className={cl.alert} variant="filled" severity="success">
                            Режиссер успешно — <strong>добавлен</strong>
                        </Alert>}
                        {managerPostStatus === 'error' && 
                        <Alert className={cl.alert} variant="filled" severity="error">
                            Что-то пошло — <strong>не так</strong>
                        </Alert>}
                        {managerDeleteStatus === 'completed' && 
                        <Alert className={cl.alert} variant="filled" severity="success">
                            Режиссер успешно — <strong>удален</strong>
                        </Alert>}
                        {managerDeleteStatus === 'error' && 
                        <Alert className={cl.alert} variant="filled" severity="error">
                            Что-то пошло — <strong>не так</strong>
                        </Alert>}
                        <div className={cl.admin__change__list}>
                            {managerData.map((m) => <div key={m.id} className={cl.admin__change__list__item}>{m.stageManagers}<button onClick={() => onClickDeleteManager(m)} className={cl.admin__change__list__button}>--</button></div>)}
                        </div>
            </div>}
            {actorPanelOpen && 
            <div className={cl.admin__change}>
                    <form className={cl.admin__change__form} onSubmit={handleSubmit(onSubmitActor)}>
                        <TextField  
                            InputProps={{className: cl.input}} 
                            InputLabelProps={{className: cl.input__label}} 
                            label="Добавить имя актера"
                            size="small"
                            fullWidth
                            error={Boolean(errors.actor?.firstName?.message)}
                            helperText={errors.actor?.firstName?.message}
                            {...register('actor.firstName', {required: 'Введите имя актера'})}  />
                        <TextField  
                            InputProps={{className: cl.input}} 
                            InputLabelProps={{className: cl.input__label}} 
                            label="Добавить фамилию актера"
                            size="small"
                            fullWidth
                            error={Boolean(errors.actor?.lastName?.message)}
                            helperText={errors.actor?.lastName?.message}
                            {...register('actor.lastName', {required: 'Введите фамилию актера'})}  />
                        <Button disabled={isValid}>Добавить</Button>
                    </form>
                    
                    {actorPostStatus === 'completed' && 
                    <Alert className={cl.alert} variant="filled" severity="success">
                        Актер успешно — <strong>добавлен</strong>
                    </Alert>}
                    {actorPostStatus === 'error' && 
                    <Alert className={cl.alert} variant="filled" severity="error">
                        Что-то пошло — <strong>не так</strong>
                    </Alert>}
                    {actorDeleteStatus === 'completed' && 
                    <Alert className={cl.alert} variant="filled" severity="success">
                        Актер успешно — <strong>удален</strong>
                    </Alert>}
                    {actorDeleteStatus === 'error' && 
                    <Alert className={cl.alert} variant="filled" severity="error">
                        Что-то пошло — <strong>не так</strong>
                    </Alert>}
                    <div className={cl.admin__change__list}>
                        {actorData.map((a) => <div key={a.id} className={cl.admin__change__list__item}>{a.firstName} {a.lastName}<button onClick={() => onClickDeleteActor(a)} className={cl.admin__change__list__button}>--</button></div>)}
                    </div>
            </div>}
            {filmsPanelOpen && 
            <div className={cl.admin__change}>
                    {filmDeleteStatus === 'completed' && 
                    <Alert className={cl.alert} variant="filled" severity="success">
                        Фильм успешно — <strong>удален</strong>
                    </Alert>}
                    {filmDeleteStatus === 'error' && 
                    <Alert className={cl.alert} variant="filled" severity="error">
                        Что-то пошло — <strong>не так</strong>
                    </Alert>}
                    <div className={cl.admin__change__list}>
                        {films.map((f) => 
                            <div key={f.id} className={cl.admin__change__list__film}>
                                <Link to={`/film/${f.id}`}>
                                    <img className={cl.admin__change__list__film__img} width={70} src={`https://localhost:44369${f.pathPoster}`} alt="Постер" />
                                </Link>
                                {f.nameFilms}
                                {f.releaseDate}
                                <button onClick={() => onClickDeleteFilm(f)} className={cl.admin__change__list__button}>
                                    --
                                </button>
                            </div>)}
                    </div>
            </div>}
        </div>
    );
};

export default Admin;