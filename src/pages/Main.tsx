import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ItemFilm from '../components/itemFilm/ItemFilm';
import { Pagination } from '../components/pagination/Pagination';
import Skeleton from '../components/skeleton/Skeleton';
import Sort from '../components/sort/Sort';
import { fetchFilms } from '../redux/film/asyncActions';
import { selectFilmData } from '../redux/film/selectors';
import { selectFilter } from '../redux/filter/selectors';
import { setFilters, setGenre } from '../redux/filter/slice';
import { useAppDispatch } from '../redux/store';
import Loader from '../components/UI/loader/Loader';

type SearchParams = {
    page?: string,
    genre?: string,
    state?: string,
}

const Main = () => {
    const dispatch = useAppDispatch();
    const { films, filmsStatus } = useSelector(selectFilmData);
    const { currentPage, genreId, countryId } = useSelector(selectFilter);
    
    const [searchParams, setSearchParams] = useSearchParams();
    const setParams: SearchParams = {};
    const postsPage = searchParams.get('page') || '';
    const postsGenre = searchParams.get('genre') || '';
    const postsCountry = searchParams.get('state') || '';
    
    const getFilms = (params: SearchParams) => {
        dispatch(
            fetchFilms({
            currentPage: Number(params.page),
            genreId: Number(params.genre),
            countryId: Number(params.state),
        }),
        );
        window.scrollTo(0, 0);
    };

    useEffect(() => {
            if(postsPage) setParams.page = postsPage;
            if(postsGenre) setParams.genre = postsGenre;
            if(postsCountry) setParams.state = postsCountry;
            
            if(postsPage || postsGenre || postsCountry){
                setSearchParams(setParams);
                dispatch(setFilters({currentPage: Number(setParams.page), genreId: Number(setParams.genre), countryId: Number(setParams.state)}));
                getFilms({genre: postsGenre, page: postsPage, state: postsCountry});
            }else{
                dispatch(setFilters({currentPage: 1, genreId: 0, countryId: 0}));
                dispatch(fetchFilms(
                    {currentPage: 1,
                    genreId: 0,
                    countryId: 0}));
            }
        }, [searchParams]);

    useEffect(() => {
            if(currentPage !== 1 || genreId !== 0 || countryId !== 0){
                if(currentPage !== 1) setParams.page = String(currentPage);
                if(genreId !== 0) setParams.genre = String(genreId);
                if(countryId !== 0) setParams.state = String(countryId);
                setSearchParams(setParams);
                getFilms(
                    {
                    genre: setParams.genre === undefined ? '0' : setParams.genre, 
                    page: setParams.page === undefined ? '1' : setParams.page, 
                    state: setParams.state  === undefined ? '0' : setParams.state });
            }
        }, [currentPage, genreId, countryId]);
    
    const filmArray = films.map((film: any) => <ItemFilm key={film.id} {...film} />);
    const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);
    return (
        <div>
            <Sort />
            <div className='content-main'>
                {filmsStatus === 'loading' ? skeletons : filmArray}
            </div>
            <Pagination />
        </div>
    );
};

export default Main;