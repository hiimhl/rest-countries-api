import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";

import Header from "../components/Header";
import "../components/All.css";

function Detail() {
  const [data, setData] = useState([]);
  const [bool, setBool] = useState(false);
  const { id } = useParams();

  //데이터 받아오기
  const getCountries = async () => {
    const json = await (
      await fetch(`https://restcountries.com/v3.1/name/${id}`)
    ).json();
    setData(json);
    setBool(true);
  };

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  return (
    <div className="allContainer">
      <Header />

      {bool ? (
        <div className="detail-all">
          <Link to="/">
            <Button className="detail-btn" contents={"← Back"} />
          </Link>
          <div className="detail-container">
            <img src={data[0].flags.svg} alt={data[0].name.common} />
            <ul className="detail-contents">
              <h2 className="detail-contents__title">{data[0].name.common}</h2>
              <li className="detail-contents__lists">
                <div className="detail-contents__list">
                  <p>Native Name : {data[0].name.common}</p>
                  <p>Population : {data[0].population}</p>
                  <p>Region : {data[0].region}</p>
                  <p>Sub Region : {data[0].subregion}</p>
                  <p>Capital : {data[0].capital}</p>
                </div>
                <div className="detail-contents__list2">
                  <p>Top Level Domain : {data[0].tld}</p>
                  {/* <p>Currencies : {toString(data[0].currencies)}</p>
                  <p>Languages : {data[0].languages}</p> */}
                </div>
              </li>
              <li className="detail-contents__borders">
                Border Countries :
                {data[0].boders === undefined
                  ? " Sorry, I don't know"
                  : data[0].borders.map((b) => (
                      <span className="border">{b}</span>
                    ))}
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <h1 className="loading">Loading...</h1>
      )}
    </div>
  );
}

export default Detail;
