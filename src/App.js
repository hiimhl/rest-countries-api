import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";

function App(props) {
  const [countries, setCountries] = useState([]);
  const getDataToApp = (data) => {
    data !== undefined && setCountries(data);
  };
  useEffect(() => {
    getDataToApp();
  });
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
