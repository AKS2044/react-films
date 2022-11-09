import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cl from './Admin.module.scss';

const Admin = () => {
    const [filmPanelOpen, setFilmPanelOpen] = useState(false);
    const [userPanelOpen, setUserPanelOpen] = useState(false);
    return (
        <div className={cl.admin}>
            <div className={cl.admin__title}>Админ панель</div>
            <div className={cl.admin__block}>
                <button onClick={() => setFilmPanelOpen(!filmPanelOpen)} className={cl.admin__block__links}>Фильмы</button>
                <button onClick={() => setUserPanelOpen(!userPanelOpen)} className={cl.admin__block__links}>Пользователи</button>
            </div>
            <div className={cl.admin__menu}>
                <div className={filmPanelOpen ? cl.active : cl.admin__menu__links }>
                    {filmPanelOpen && <Link to='/addfilm'>Добавить фильм</Link>}
                </div>
                <div className={userPanelOpen ? cl.active : cl.admin__menu__links }>
                    {userPanelOpen && <Link to='/addfilm'>Список пользователей</Link>}
                </div>
            </div>
        </div>
    );
};

export default Admin;