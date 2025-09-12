import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../redux/product.slice";
import Li from "./Li";

function Products() {
  let [list, setList] = useState([]);
  let [pagination, setPagination] = useState({
    perPage: 12,
    pages: 1,
    currentPage: 1,
  });
  let dispatch = useDispatch();
  let mainList = useSelector((state) => state.product.list);

  let getProductDetails = (pageNumber) => {
    let start = pagination.perPage * (pageNumber - 1); // 0
    let end = pagination.perPage * pageNumber; // 10
    let _list = mainList.slice(start, end);
    setPagination({ ...pagination, currentPage: pageNumber });
    setList(_list);
  };
  useEffect(() => {
    dispatch(getProductList());
  }, []);
  useEffect(() => {
    console.log(mainList);
    let pages = Math.ceil(mainList.length / pagination.perPage);
    setPagination({ ...pagination, pages, currentPage: 1 });
    let _list = mainList.slice(0, pagination.perPage * pagination.currentPage);
    setList(_list);
  }, [mainList]);
  return (
    <div>
      <section className="product-list">
        {list.map((product, index) => {
          return <Li key={product.id} product={product} />;
        })}
      </section>
      <section className="pagination-section">
        <button
          className="btn btn-page"
          onClick={() => getProductDetails(pagination.currentPage - 1)}
          disabled={pagination.currentPage === 1 ? true : false}
        >
          &lt;&lt;
        </button>
        <ul className="pagination">
          {Array(pagination.pages)
            .fill("")
            .map((value, index) => {
              return (
                <li
                  key={index}
                  onClick={() => getProductDetails(index + 1)}
                  className={
                    pagination.currentPage === index + 1 ? "active" : ""
                  }
                >
                  {index + 1}
                </li>
              );
            })}
        </ul>
        <button
          className="btn btn-page"
          disabled={pagination.pages === pagination.currentPage ? true : false}
          onClick={() => getProductDetails(pagination.currentPage + 1)}
        >
          &gt;&gt;
        </button>
      </section>
    </div>
  );
}

export default Products;
