import { useEffect} from 'react';
import { useSelector } from 'react-redux';
import ItemFilm from '../components/itemFilm/ItemFilm';
import Skeleton from '../components/skeleton/Skeleton';
import Sort from '../components/sort/Sort';
import { fetchFilms } from '../redux/film/asyncActions';
import { selectFilmData } from '../redux/film/selectors';
import { useAppDispatch } from '../redux/store';

const Main = () => {
    const dispatch = useAppDispatch();
    const { items, status } = useSelector(selectFilmData);
    
    useEffect(() => {
        dispatch(fetchFilms())
        }, []);
    
    const films = items.map((film: any) => <ItemFilm key={film.id} {...film} />);
    const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

    return (
        <div className=''>
            <Sort />
            <div className='content-main'>
                {status === 'loading' ? skeletons : films}
            </div>
            <div className='pagination'>
                <button className='pagination-button'>Начало</button>
                <button className='pagination-button'>1</button>
                <button className='pagination-button'>2</button>
                <button className='pagination-button'>3</button>
                <button className='pagination-button'>4</button>
                <button className='pagination-button'>5</button>
                <button className='pagination-button'>6</button>
                <button className='pagination-button'>7</button>
                <button className='pagination-button'>8</button>
                <button className='pagination-button'>9</button>
                <button className='pagination-button'>10</button>
                <button className='pagination-button'>В конец</button>
            </div>
        </div>
    );
};

export default Main;