import React from "react";
import { useNavigate } from "react-router-dom";
import AddCartButton from "./shared/AddCartButton";

function Li({ product }) {
  let navigate = useNavigate();
  let addToCart = (event) => {
    event.stopPropagation();
    alert("Added");
  };
  return (
    <section
      className="product-list-item"
      onClick={() => navigate(`/product-detail/${product.id}`)}
    >
      <h3>{product.title}</h3>
      <img src={product.images[0]} alt="" />
      <p>{product.description.substring(0, 10)}...</p>
      <p>
        <span>$ {product.price}</span>
      </p>
      <AddCartButton product={product} />
    </section>
  );
}

export default Li;
