import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div className="w-[32%]">
            <Product key={index} src="assets/p1.png" badge={true} />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemSelected, setItemSelected] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemSelected(event.selected);
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-wrap justify-between">
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        previousClassName="hidden"
        nextClassName="hidden"
        pageClassName="inline-block border border-sloid border-[#F0F0F0] py-2 px-3.5 font-dm font-regular font-sm "
        containerClassName="flex gap-x-3.5 mt-12"
        activeClassName="inline-block border border-sloid border-[#F0F0F0] py-2 px-3.5 font-dm font-regular font-sm bg-black text-white"
      />
      <p className="font-regular font-sm absolute bottom-0 right-0 font-dm text-[#767676]">
        Products from {itemOffset} to {itemOffset + itemsPerPage} of 80
      </p>
    </>
  );
};

export default Pagination;
