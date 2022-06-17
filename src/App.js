import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";

function App(props) {
  const [countries, setCountries] = useState([]);
  const getDataToApp = (data) => {
    if (data.length !== 0) {
      setCountries(data);
    }
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home getData={getDataToApp} />} />
        <Route path={"/detail/:id"} element={<Detail sendData={countries} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
