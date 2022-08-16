import React from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TableActions = ({
  nextHandler,
  prevHandler,
  limitHandler,
  page,
  totalRecords = 0,
  limit = 1,
  showLimit = true,
  hideOnMobile = false
}) => {
  const totalPages = Math.ceil(totalRecords / limit);
  return (
    <div className={`flex justify-end table-controls ${hideOnMobile ? 'hide-on-mobile' : ''} `}>
      {!showLimit || showLimit === "false" || showLimit === false ? null : (
        <div className="filter-input mr-5">
          <label>Rows per page: </label>
          <select onChange={limitHandler}>
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      )}

      <div className="flex text-green-500">
        <p className="px-4">
          Viewing {((page - 1) * limit) + 1} -{" "}
          {limit * page > totalRecords ? totalRecords : limit * page} of{" "}
          {totalRecords}
        </p>
        <button disabled={page <= 1} onClick={prevHandler}>
          <IoIosArrowBack />
        </button>
        <button disabled={page >= totalPages} onClick={nextHandler}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default TableActions;
