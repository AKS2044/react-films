import React from 'react';
import cl from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.footer__logo}>LogoSuite - какой-то слогон</div>
        </footer>
    );
};

export default Footer;