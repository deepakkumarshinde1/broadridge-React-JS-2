import React, { useEffect } from "react";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import PopMessage from "./components/PopMessage";

function App() {
  let errorMessage = useSelector((state) => state.error.errorMessage);
  useEffect(() => {
    if (errorMessage) {
    }
  }, [errorMessage]);
  return (
    <>
      <PopMessage />
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
