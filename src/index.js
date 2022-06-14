import React from "react";
import ReactRoot from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
// import reportWebVitals from './reportWebVitals';

const root = ReactRoot.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<App />} />
      <Route path={"/detail"} element={<Detail />} />
    </Routes>
  </BrowserRouter>
);

// reportWebVitals();
