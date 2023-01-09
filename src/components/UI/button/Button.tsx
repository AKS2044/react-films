import cl from './Button.module.scss'

type ButtonProps = {
    disabled?: boolean,
    children: string,
};
const Button = (props: ButtonProps) => {
    return (
        <button disabled={!props.disabled} type="submit" className={cl.btn}>
            {props.children}
        </button>
    );
};

export default Button;