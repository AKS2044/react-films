import cl from './Register.module.scss';

const Register = () => {
    return (
        <div className={cl.register}>
            <input className={cl.input} placeholder='Придумайте логин' />
        </div>
    );
};

export default Register;