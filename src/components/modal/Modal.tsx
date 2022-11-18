import React from 'react';
import cl from './Modal.module.scss';

type ModalProps = {
    active: boolean,
    setActive:  React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({active, setActive, children}) => {
    return (
        <div className={active ? `${cl.modal} ${cl.active}` : `${cl.modal}`} onClick={() => setActive(false)}>
            <div className={active ? `${cl.modal__content} ${cl.active}` : `${cl.modal__content}`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;