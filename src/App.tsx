import './App.scss';
import Main from './pages/Main';
import View from './pages/View';
import Profile from './pages/Profile';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Slider from './components/slider/Slider';
import Menu from './components/menu/Menu';
import {Routes, Route, Navigate} from 'react-router-dom';
import NotFound from './pages/NotFound';
import AddFilm from './pages/addFilm/AddFilm';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchAuth } from './redux/Auth/asyncActions';
import { useAppDispatch } from './redux/store';
import { useSelector } from 'react-redux';
import { selectIsAuth, selectLoginData } from './redux/Auth/selectors';
import Admin from './pages/admin/Admin';
import { fetchGetGenres } from './redux/filmAdmin/asyncActions';

function App() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const [isAdmin, setIsAdmin] = useState(false);
  const { data, statusAuth, statusLogin } = useSelector(selectLoginData);
  
  useEffect(() => {
    dispatch(fetchAuth());
    dispatch(fetchGetGenres())
  }, [] )

  useEffect(() => {
    if(statusAuth === 'completed'){
      const result = Boolean(data.roles.find((r) => r === 'Admin'))
      if(result){
        setIsAdmin(true)
      }
    }
  }, [statusAuth] )

  return (
    <div>
      <Header />
      <Slider />
      <div className='container'>
        <Menu />
        <main className='main-block'>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/film/:id" element={<View /> } />
            <Route path="/profile" element={<Profile />} />
            {isAdmin && <Route path="/admin" element={<Admin /> } />}
            {isAdmin && <Route path="/addFilm" element={<AddFilm />} />}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
    );
}

export default App;
