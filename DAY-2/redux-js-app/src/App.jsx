import React, { useEffect } from "react";
import Home from "./components/Home";
import { useSelector } from "react-redux";

function App() {
  let errorMessage = useSelector((state) => state.error.errorMessage);
  useEffect(() => {
    if (errorMessage) {
      console.log(errorMessage);
    }
  }, [errorMessage]);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
