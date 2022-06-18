import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Country from "../components/Country";
import "../components/All.css";

function Detail(props) {
  const [data, setData] = useState([]);
  const { id } = useParams();

  //데이터 받아오기
  const getCountries = async () => {
    const json = await (
      await fetch(`https://restcountries.com/v3.1/name/${id}`)
    ).json();
    setData(json);
  };

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div className="allContainer">
      <Header />
      <Country data={data} />
    </div>
  );
}

export default Detail;
