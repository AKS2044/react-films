import cl from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';
import { useAppDispatch } from '../../redux/store';
import { setCurrentPage } from '../../redux/filter/slice';
import { selectFilter } from '../../redux/filter/selectors';
import { useSelector } from 'react-redux';

export const Pagination = () => {
    const dispatch = useAppDispatch();
    const { currentPage } = useSelector(selectFilter);
    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    return (
        <ReactPaginate
            className={cl.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={2}
            pageCount={5}
            forcePage={currentPage - 1}
        />
    );
};