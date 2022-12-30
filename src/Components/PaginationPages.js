import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPageAction } from "../Redux/actions/actions";

const PaginationPages = () => {
  const dispatch = useDispatch();
  const { pageCount } = useSelector((state) => state);
  const handlePageClick = (data) => {
    dispatch(getPageAction(data.selected + 1));
  };
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="< السابق"
        containerClassName="pagination justify-content-center my-2"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
    </div>
  );
};

export default PaginationPages;
