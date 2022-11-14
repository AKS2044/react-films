import { useEffect, useRef } from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ItemFilm from '../components/itemFilm/ItemFilm';
import { Pagination } from '../components/pagination/Pagination';
import Skeleton from '../components/skeleton/Skeleton';
import Sort from '../components/sort/Sort';
import { fetchFilms } from '../redux/film/asyncActions';
import { selectFilmData } from '../redux/film/selectors';
import { selectFilter } from '../redux/filter/selectors';
import { setCurrentPage, setFilters } from '../redux/filter/slice';
import { useAppDispatch } from '../redux/store';

const Main = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isMounted = useRef(false);
    const { films, filmsStatus } = useSelector(selectFilmData);
    const { currentPage } = useSelector(selectFilter);

    const items = [
        {id: 1, nameFilms: 'Test', pathPoster: '/'},
        {id: 2, nameFilms: 'Test', pathPoster: '/'},
        {id: 3, nameFilms: 'Test', pathPoster: '/'},
        {id: 4, nameFilms: 'Test', pathPoster: '/'},
        {id: 5, nameFilms: 'Test', pathPoster: '/'},
        {id: 6, nameFilms: 'Test', pathPoster: '/'},
        {id: 7, nameFilms: 'Test', pathPoster: '/'},
        {id: 8, nameFilms: 'Test', pathPoster: '/'},
        {id: 9, nameFilms: 'Test', pathPoster: '/'},
        {id: 10, nameFilms: 'Test', pathPoster: '/'},
        {id: 11, nameFilms: 'Test', pathPoster: '/'},
        {id: 12, nameFilms: 'Test', pathPoster: '/'},
        {id: 13, nameFilms: 'Test', pathPoster: '/'},
        {id: 14, nameFilms: 'Test', pathPoster: '/'},
        {id: 15, nameFilms: 'Test', pathPoster: '/'},
        {id: 16, nameFilms: 'Test', pathPoster: '/'},
        {id: 17, nameFilms: 'Test', pathPoster: '/'},
        {id: 18, nameFilms: 'Test', pathPoster: '/'},
        {id: 19, nameFilms: 'Test', pathPoster: '/'},
        {id: 20, nameFilms: 'Test', pathPoster: '/'},
    ]

    const getFilms = async () => {
        dispatch(
            fetchFilms({
            currentPage: currentPage,
        }),
        );
    
        window.scrollTo(0, 0);
    };
    
    useEffect(() => {
        if(isMounted.current){
            const params = {
                    page: currentPage
                };
            const queryString = qs.stringify(params, {skipNulls: true});
            navigate(`?${queryString}`);
            getFilms();
        }
        if(window.location.search){
            const params = qs.parse(window.location.search.substring(1));
            dispatch(setFilters({currentPage: Number(params.page)}));
        }

        isMounted.current = true;
        }, [currentPage]);
    
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            dispatch(setFilters({currentPage: Number(params.page)}));
        }
        const params = qs.parse(window.location.search.substring(1)) ;
        
        if(!window.location.search || Number(params.page) === 1 ){
            getFilms();
        }
            
        isMounted.current = true;
        }, []);

    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page));
    };
    
    const filmArray = films.map((film: any) => <ItemFilm key={film.id} {...film} />);
    const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

    return (
        <div>
            <Sort />
            <div className='content-main'>
                {filmsStatus === 'loading' ? skeletons : filmArray}
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </div>
    );
};

export default Main;