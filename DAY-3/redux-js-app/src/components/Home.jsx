import Products from "./Products";
import Footer from "./Footer";
import Header from "./Header";
import ProductDetails from "./ProductDetails";
import { Route, Routes } from "react-router-dom";
import { ProductContextProvider } from "../context/product.context";

function Home() {
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
