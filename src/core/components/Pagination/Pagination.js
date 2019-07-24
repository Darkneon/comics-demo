import React from "react";
import ReactJsPagination from "react-js-pagination";
import './Pagination.css';

function Pagination({activePage=0, totalItemCount=0, itemsCountPerPage=7, onChange=()=>{}}) {
   return (
       <div className="pagination-container">
           <ReactJsPagination
                activePage={activePage}
                itemsCountPerPage={itemsCountPerPage}
                totalItemsCount={totalItemCount}
                pageRangeDisplayed={5}
                onChange={onChange}
           />
       </div>);
}

export default Pagination
