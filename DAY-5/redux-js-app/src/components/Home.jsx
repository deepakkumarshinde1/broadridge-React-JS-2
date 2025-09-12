import Products from "./Products";
import Footer from "./Footer";
import Header from "./Header";
import ProductDetails from "./ProductDetails";
import { Route, Routes } from "react-router-dom";
import { ProductContextProvider } from "../context/product.context";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "../redux/saga/auth.slice";

function Home() {
  let dispatch = useDispatch();
  let authDetails = useSelector((state) => state.auth.loginDetails);
  useLayoutEffect(() => {
    dispatch(checkLogin());
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route
          path="/product-detail/:id"
          element={
            <ProductContextProvider>
              <ProductDetails name="Deepak" />
            </ProductContextProvider>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default Home;
