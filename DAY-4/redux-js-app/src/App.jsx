import React, { useEffect } from "react";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

function App() {
  let errorMessage = useSelector((state) => state.error.errorMessage);
  useEffect(() => {
    if (errorMessage) {
      console.log(errorMessage);
    }
  }, [errorMessage]);
  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
