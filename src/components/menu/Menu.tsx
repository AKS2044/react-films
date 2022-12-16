import { useSelector } from 'react-redux';
import posterMenu from '../../img/posterMenu.jpg';
import { selectFilmAdminData } from '../../redux/filmAdmin/selectors';
import { setGenre } from '../../redux/filter/slice';
import { useAppDispatch } from '../../redux/store';
import cl from './Menu.module.scss';

const Menu = () => {
    const dispatch = useAppDispatch();
    const { genreData } = useSelector(selectFilmAdminData);

    const onChangeGenre = (genreId: number) => {
        dispatch(setGenre(genreId));
    };
    return (
        <div className={cl.menu}>
            <div className={cl.menu__block}>
                <div className={cl.menu__block__title}>Меню</div>
                <div className={cl.menu__border}></div>
                <div className={cl.content}>
                    {genreData.map((g) => <button onClick={() => onChangeGenre(g.id)} key={g.id} className={cl.content__link}>{g.genres} <small>(1тыс)</small></button>)}
                </div>
            </div>
            <div className={cl.menu__block}>
                <div className={cl.menu__block__title}>Скоро на сайте</div>
                <div className={cl.menu__border}></div>
                <div className={cl.content}>
                    <div className={cl.content__block}>
                        <a href='/'><img className={cl.content__block__poster} src={posterMenu} alt="Название фильма(год)" title="Название фильма(год)" /></a>
                        <div className={cl.content__block__inf}>
                        <div className={cl.content__block__inf__text}>Название</div>
                        <div className={cl.content__block__inf__text}>Год: 2011</div>
                        <div className={cl.content__block__inf__text}>Рейтинг: 4.5</div>
                        <div className={cl.content__block__inf__text}>Рейтинг: 6.4</div>
                        <div className={cl.content__block__inf__text}>Рейтинг: 3.2</div>
                        </div>
                    </div>
                    <div className={cl.content__block}>
                        <a href='/'><img className={cl.content__block__poster} src={posterMenu} alt="Название фильма(год)" title="Название фильма(год)" /></a>
                        <div className={cl.content__block__inf}>
                        <div className={cl.content__block__inf__text}>Название</div>
                        <div className={cl.content__block__inf__text}>Год: 2011</div>
                        <div className={cl.content__block__inf__text}>Рейтинг: 4.5</div>
                        <div className={cl.content__block__inf__text}>Рейтинг: 6.4</div>
                        <div className={cl.content__block__inf__text}>Рейтинг: 3.2</div>
                        </div>
                    </div>
                    <div className={cl.content__block}>
                        <a href='/'><img className={cl.content__block__poster} src={posterMenu} alt="Название фильма(год)" title="Название фильма(год)" /></a>
                        <div className={cl.content__block__inf}>
                        <div className={cl.content__block__inf__text}>Название</div>
                        <div className={cl.content__block__inf__text}>Год: 2011</div>
                        <div className={cl.content__block__inf__text}>Рейтинг: 4.5</div>
                        <div className={cl.content__block__inf__text}>Рейтинг: 6.4</div>
                        <div className={cl.content__block__inf__text}>Рейтинг: 3.2</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cl.menu__block}>
                <div className={cl.menu__block__title}>Рекомендуем</div>
                <div className={cl.menu__border}></div>
                <div className={cl.content}>
                    <div className={cl.content__block}>
                    <a href='/'><img className={cl.content__block__poster} src={posterMenu} alt="Название фильма(год)" title="Название фильма(год)" /></a>
                        <div className={cl.content__block__inf}>
                            <div className={cl.content__block__inf__text}>Название</div>
                            <div className={cl.content__block__inf__text}>Год: 2011</div>
                            <div className={cl.content__block__inf__text}>Рейтинг: 4.5</div>
                            <div className={cl.content__block__inf__text}>Рейтинг: 6.4</div>
                            <div className={cl.content__block__inf__text}>Рейтинг: 3.2</div>
                        </div>
                    </div>
                    <div className={cl.content__block}>
                        <a href='/'><img className={cl.content__block__poster} src={posterMenu} alt="Название фильма(год)" title="Название фильма(год)" /></a>
                        <div className={cl.content__block__inf}>
                            <div className={cl.content__block__inf__text}>Название</div>
                            <div className={cl.content__block__inf__text}>Год: 2011</div>
                            <div className={cl.content__block__inf__text}>Рейтинг: 4.5</div>
                            <div className={cl.content__block__inf__text}>Рейтинг: 6.4</div>
                            <div className={cl.content__block__inf__text}>Рейтинг: 3.2</div>
                        </div>
                    </div>
                    <div className={cl.content__block}>
                        <a href='/'><img className={cl.content__block__poster} src={posterMenu} alt="Название фильма(год)" title="Название фильма(год)" /></a>
                        <div className={cl.content__block__inf}>
                            <div className={cl.content__block__inf__text}>Название</div>
                            <div className={cl.content__block__inf__text}>Год: 2011</div>
                            <div className={cl.content__block__inf__text}>Рейтинг: 4.5</div>
                            <div className={cl.content__block__inf__text}>Рейтинг: 6.4</div>
                            <div className={cl.content__block__inf__text}>Рейтинг: 3.2</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;