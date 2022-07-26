import React from 'react';
import '../../css/Notice/pagination.css';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Pagination = ({ total, page, setPage, LIST_PER_PAGE }) => {
  const PagesNum = Math.ceil(total / LIST_PER_PAGE);
  const pagesNumArray = new Array(PagesNum);
  return (
    <div className='paginationBox'>
      <button
        className='PrevButton'
        onClick={() => {
          setPage(page - 1);
        }}
        disabled={page === 1}
      >
        <BiChevronLeft />
      </button>
      {pagesNumArray.fill().map((ele, i) => {
        return (
          <button
            className='PageNumButton'
            key={i + 1}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        );
      })}

      <button
        className='NextButton'
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={page === PagesNum}
      >
        <BiChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
