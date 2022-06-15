import React from "react";
import ReactRoot from "react-dom/client";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

const root = ReactRoot.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);

// reportWebVitals();
