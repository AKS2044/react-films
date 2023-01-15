import './App.scss';
import Main from './pages/Main';
import View from './pages/View/View';
import Profile from './pages/Profile';
import {Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import AddFilm from './pages/addFilm/AddFilm';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { useEffect, useState } from 'react';
import { fetchAuth } from './redux/Auth/asyncActions';
import { useAppDispatch } from './redux/store';
import { useSelector } from 'react-redux';
import { selectLoginData } from './redux/Auth/selectors';
import Admin from './pages/admin/Admin';
import { fetchGetGenres } from './redux/filmAdmin/asyncActions';
import Layout from './components/Layout';
import RequireAuth from './hoc/RequireAuth';
import UpgradeFilm from './pages/upgradeFilm/UpgradeFilm';

function App() {
  const dispatch = useAppDispatch();
  const [isAdmin, setIsAdmin] = useState(false);
  const { data, statusAuth, statusLogin, statusRegister } = useSelector(selectLoginData);
  
  useEffect(() => {
    dispatch(fetchAuth());
    dispatch(fetchGetGenres())
  }, [statusLogin, statusRegister] )

  useEffect(() => {
    if(statusAuth === 'completed'){
      const result = Boolean(data.roles.find((r) => r === 'Admin'))
      if(result){
        setIsAdmin(true)
      }
    }
  }, [statusAuth] )

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="film/:id" element={<View /> } />
          <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
          {isAdmin && <Route path="admin" element={<Admin /> } />}
          {isAdmin && <Route path="addFilm" element={<AddFilm />} />}
          <Route path="upgrade/:id" element={<UpgradeFilm />} />
          <Route path="register" element={<Register />} /> 
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
}

export default App;
