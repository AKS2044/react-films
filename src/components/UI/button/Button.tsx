import React from 'react';
import cl from './Button.module.scss'

type ButtonProps = {
    children: string
};
const Button = ({children}: ButtonProps) => {
    return (
        <button className={cl.btn}>
            {children}
        </button>
    );
};

export default Button;