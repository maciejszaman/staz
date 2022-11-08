import React from "react";
import * as SharedTypes from "../../../shared/Types.types";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: SharedTypes.PaginationProps) => {
  const lastPage = Math.ceil(totalPosts / postsPerPage)

  console.log(totalPosts)

/*   const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    } */

          /* {pageNumbers.map((number) => (
        <button onClick={() => paginate(number)}>
          <div key={number} className="w-5">
            {number}
          </div>
        </button>
      ))} */
      

  return (
      <div className="flex flex-row justify-around pb-2 bg-slate-200 drop-shadow-md">
        <button className={currentPage !== 1 ? `w-[20%] hover:bg-slate-300 rounded-lg` : `w-[20%] text-slate-400 pointer-events-none`} onClick={() => paginate(currentPage - 1)}>Previous</button>
        {totalPosts ? <p className="font-bold">{`${currentPage}/${lastPage}`}</p> : <p className="font-bold">{`0/0`}</p> }
        <button className={currentPage !== lastPage && totalPosts !== 0 ? "w-[20%] hover:bg-slate-300 rounded-lg": "w-[20%] text-slate-400 pointer-events-none"} onClick={() => paginate(currentPage + 1)}>Next</button>
      </div>
  );
};

export default Pagination;
