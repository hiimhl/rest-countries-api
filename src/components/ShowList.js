import Card from "./UI/Card";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./All.css";

function ShowList(props) {
  const [countries, setCountries] = useState([]);
  const [bool, setBool] = useState(false);
  const navigate = useNavigate();

  if (countries.length !== 0) {
    props.sendData(countries);
  }

  const getCountries = async () => {
    const json = await //
    (await fetch("https://restcountries.com/v3.1/all"))
      .json()
      .catch(console.log("error"));
    setCountries(json);
  };

  useEffect(() => {
    getCountries();
    setBool(true);
  }, []);

  //데이터 보내기

  return (
    <React.Fragment>
      {bool ? (
        <ul className="countries-list">
          {countries.map((item) => {
            return (
              <Card
                onClickHandler={() => {
                  navigate(`/detail/${item.name.common}`);
                }}
                className="list"
                key={item.name.common}
                name={item.name.common}
                population={item.population}
                flags={item.flags.png}
                region={item.region}
                capital={item.capital}
              />
            );
          })}
        </ul>
      ) : (
        <h1>Loading...</h1>
      )}
    </React.Fragment>
  );
}

export default ShowList;
