import './App.scss';
import posterSlider from '../src/img/posterSlider.jpg';
import Main from './pages/Main';
import View from './pages/View';
import Profile from './pages/Profile';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Slider from './components/slider/Slider';
import Menu from './components/menu/Menu';
import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import NotFound from './pages/NotFound';
import PostService from './API/PostService';
import axios from "axios";
import AddFilm from './pages/addFilm/AddFilm';

type postsProps = {
    photo: string,
    name: string,
}[];


const posts: postsProps= [
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},
  {photo: posterSlider, name: 'Название фильма(год)Название фильма(год)'},]

function App() {
  const [post, setPost] = useState([]);
    useEffect(() => {
    axios.get('https://localhost:44369/api/Film/allFilms').then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <Slider films = {post} />
      <div className='container'>
        <Menu />
        <main className='main-block'>
          <Routes>
            <Route path="" element={<Main films = {post} />} />
            <Route path="/film/:id" element={<View /> } />
            <Route path="/profile" element={<Profile />} />
            <Route path="/addFilm" element={<AddFilm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
    );
}

export default App;
