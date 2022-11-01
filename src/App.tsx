import './App.scss';
import Main from './pages/Main';
import View from './pages/View';
import Profile from './pages/Profile';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Slider from './components/slider/Slider';
import Menu from './components/menu/Menu';
import {Routes, Route} from 'react-router-dom';
import NotFound from './pages/NotFound';
import AddFilm from './pages/addFilm/AddFilm';
import Login from './pages/login/Login';
import { useSelector } from 'react-redux';
import { selectFilter } from './redux/filter/selectors';

function App() {
  const { currentPage } = useSelector(selectFilter);
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
            <Route path="/addFilm" element={<AddFilm />} />
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
