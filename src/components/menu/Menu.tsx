import React from 'react';
import posterMenu from '../../img/posterMenu.jpg';
import cl from './Menu.module.scss';

const Menu = () => {
    return (
        <div className={cl.menu}>
            <div className={cl.menu__block}>
                <div className={cl.menu__block__title}>Меню</div>
                <div className={cl.menu__border}></div>
                <div className={cl.content}>
                    <a href='/' className={cl.content__link}>Боевик<small>(1тыс)</small></a>
                    <a href='/' className={cl.content__link}>Фантастика<small>(1тыс)</small></a>
                    <a href='/' className={cl.content__link}>Триллер<small>(1тыс)</small></a>
                    <a href='/' className={cl.content__link}>Боевик<small>(1тыс)</small></a>
                    <a href='/' className={cl.content__link}>Боевик<small>(1тыс)</small></a>
                    <a href='/' className={cl.content__link}>Боевик<small>(1тыс)</small></a>
                    <a href='/' className={cl.content__link}>Документальный<small>(1тыс)</small></a>
                    <a href='/' className={cl.content__link}>Боевик<small>(1тыс)</small></a>
                    <a href='/' className={cl.content__link}>Боевик<small>(1тыс)</small></a>
                    <a href='/' className={cl.content__link}>Приключения<small>(1тыс)</small></a>
                    <a href='/' className={cl.content__link}>Фэнтези<small>(1тыс)</small></a>
                    <a href='/' className={cl.content__link}>Боевик<small>(1тыс)</small></a>
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