import React from 'react';
import cl from './Input.module.scss'

type InputProps = {
    placeholder: string
}

const Input = (props: InputProps) => {
    return (
    <input className={cl.input} placeholder={props.placeholder} />
    );
};

export default Input;