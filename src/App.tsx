import './App.scss';
import posterSlider from '../src/img/posterSlider.jpg';
import Main from './pages/Main';
import View from './pages/View';
import Profile from './pages/Profile';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Slider from './components/slider/Slider';
import Menu from './components/menu/Menu';

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
  return (
    <div>
      <Header />
      <Slider films = {posts} />
      <div className='container'>
        <Menu />
        <main className='main-block'>
            {/* <Main films={postsSlider}/> */}
            {/* <View /> */}
            <Profile />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
