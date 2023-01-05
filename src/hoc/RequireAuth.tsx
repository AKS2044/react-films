import { useSelector } from 'react-redux';
import {useLocation, Navigate } from 'react-router-dom';
import { selectIsAuth, selectLoginData } from '../redux/Auth/selectors';

type PropsRequireAuth = {
    children: JSX.Element
}

const RequireAuth: React.FC<PropsRequireAuth> = ({children}) => {
    const { statusAuth } = useSelector(selectLoginData);
    const location = useLocation();
    const isAuth = useSelector(selectIsAuth);
    
        if(!isAuth){
            return <Navigate to='/login' state={{from: location}} />;
        }
        return children;
};

export default RequireAuth;