import { createContext, useContext, useState } from "react";
import api from "../config/axios";

// create context
const ProductContext = createContext({});

// create hook
export function useProductContext() {
  return useContext(ProductContext);
}

// create wrapper component
export function ProductContextProvider({ children }) {
  let [productDetails, setProductDetails] = useState(null);
  let getProductDetails = async (id) => {
    let { data } = await api.get(`/products/${id}`);
    setProductDetails(data);
  };
  let shared = {
    getProductDetails,
    productDetails,
  };
  return (
    <ProductContext.Provider value={shared}>{children}</ProductContext.Provider>
  );
}
