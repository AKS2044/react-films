import { useEffect, useRef } from 'react';
import qs from 'qs';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ItemFilm from '../components/itemFilm/ItemFilm';
import { Pagination } from '../components/pagination/Pagination';
import Skeleton from '../components/skeleton/Skeleton';
import Sort from '../components/sort/Sort';
import { fetchFilms } from '../redux/film/asyncActions';
import { selectFilmData } from '../redux/film/selectors';
import { selectFilter } from '../redux/filter/selectors';
import { setCurrentPage, setFilters, setGenre } from '../redux/filter/slice';
import { useAppDispatch } from '../redux/store';
import Loader from '../components/UI/loader/Loader';

const Main = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isMounted = useRef(false);
    const { films, filmsStatus } = useSelector(selectFilmData);
    const { currentPage, genreId, countryId } = useSelector(selectFilter);
    const [searchParams, setSearchParams] = useSearchParams();
    
    const getFilms = async () => {
        dispatch(
            fetchFilms({
            currentPage: currentPage,
            genreId: genreId,
            countryId: countryId,
        }),
        );
        window.scrollTo(0, 0);
    };
    
    useEffect(() => {
        if(isMounted.current){
                const params = {
                    page: currentPage,
                    genreId: genreId,
                    countryId: countryId
                };
            const queryString = qs.stringify(params, {skipNulls: true});
            navigate(`?${queryString}`);

            getFilms();
        }
        if(window.location.search){
            const params = qs.parse(window.location.search.substring(1));
            dispatch(setFilters({currentPage: Number(params.page), genreId: Number(params.genreId), countryId: Number(params.countryId)}));
        }

        isMounted.current = true;
        }, [currentPage, genreId, countryId]);
    
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            dispatch(setFilters({currentPage: Number(params.page), genreId: Number(params.genreId), countryId: Number(params.countryId)}));
        }
        const params = qs.parse(window.location.search.substring(1)) ;
        
        if(!window.location.search || Number(params.page) === 1 ){
            getFilms();
        }
        isMounted.current = true;
        }, []);

    useEffect(() => {
        if(!window.location.search){
            dispatch(setGenre(0));
        }
        }, [window.location.search]);

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