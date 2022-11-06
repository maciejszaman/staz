import React from "react";
import * as SharedTypes from "../../../shared/Types.types";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: SharedTypes.PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-row justify-around w-[100%] h-14 bg-slate-200 drop-shadow-md">
      {/* {pageNumbers.map((number) => (
        <button onClick={() => paginate(number)}>
          <div key={number} className="w-5">
            {number}
          </div>
        </button>
      ))} */}
      <button onClick={() => paginate(currentPage - 1)}>Previous</button>
      <p>{currentPage}</p>
      <button onClick={() => paginate(currentPage + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
