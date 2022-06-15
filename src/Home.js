import React, { useState } from "react";
import ShowList from "./components/ShowList";
import Header from "./components/Header";
import "./index.css";

function Home(props) {
  const [data, setData] = useState([]);
  const getDataToHome = (countries) => {
    setData(countries);
    props.getData(data);
  };

  return (
    <div className="all">
      <Header />
      <ShowList sendData={getDataToHome} />
    </div>
  );
}

export default Home;
