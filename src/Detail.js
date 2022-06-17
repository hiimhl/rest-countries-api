import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./components/UI/Button";
import "./index.css";
import { Link } from "react-router-dom";
import Country from "./components/Country";

function Detail(props) {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  //데이터 받아오기
  const getCountries = async () => {
    const json = await (
      await fetch(`https://restcountries.com/v3.1/name/${id}`)
    ).json();
    setData(json);
  };

  console.log(data);
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <div className="all">
      <Header />

      <Link to="/">
        <Button contents={"← Back"} />
      </Link>
      <Country data={data} />
    </div>
  );
}

export default Detail;
