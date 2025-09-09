import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../redux/product.slice";
import Li from "./Li";

function Products() {
  let dispatch = useDispatch();
  let list = useSelector((state) => state.product.list);
  useEffect(() => {
    dispatch(getProductList());
  }, []);
  return (
    <div>
      Products
      <ul>
        {list.map((product, index) => {
          return <Li key={product.id} product={product} />;
        })}
      </ul>
    </div>
  );
}

export default Products;
