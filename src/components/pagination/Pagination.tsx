import React, { useState } from "react";
import paginationStyle from "./Pagination.css";

interface PaginationProps {
  currentPage: number;
  productsPerPage: number;
  setCurrentPage: (page: number) => void;
  totalProducts: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  productsPerPage,
  setCurrentPage,
  totalProducts,
}) => {
  const pageNumbers = [];

  const [pageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const paginateNextPage = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const paginatePrevPage = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={paginationStyle.pagination}>
      <li
        onClick={paginatePrevPage}
        className={
          currentPage === pageNumbers[0] ? `${paginationStyle.hidden}` : ""
        }
      >
        {"<"}
      </li>

      {pageNumbers.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <li
              key={number}
              onClick={() => paginate(number)}
              className={
                currentPage === number ? `${paginationStyle.active}` : ""
              }
            >
              {number}
            </li>
          );
        }
      })}

      <li
        onClick={paginateNextPage}
        className={
          currentPage === pageNumbers[pageNumbers.length - 1]
            ? `${paginationStyle.hidden}`
            : ""
        }
      >
        {">"}
      </li>
    </div>
  );
};

export default Pagination;
