import cl from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
    currentPage: number;
    onChangePage: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
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