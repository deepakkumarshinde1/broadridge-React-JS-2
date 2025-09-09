import React from "react";

function Li({ product }) {
  return <li key={product.id}>{product.name}</li>;
}

export default Li;
