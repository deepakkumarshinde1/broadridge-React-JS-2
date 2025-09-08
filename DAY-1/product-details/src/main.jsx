import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CounterContextObject from "homePage/CounterContext";

createRoot(document.getElementById("root")).render(
  <CounterContextObject.CounterContextProvider>
    <App />
  </CounterContextObject.CounterContextProvider>
);
