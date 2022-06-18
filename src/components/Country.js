import React, { useEffect, useState } from "react";
import "./All.css";
import { Link } from "react-router-dom";
import Button from "./UI/Button";

function Country({ data }) {
  const [bool, setBool] = useState(false);

  useEffect(() => {
    if (data.length !== 0) {
      setBool(true);
      console.log(data[0].borders);
    }
  }, []);

  return (
    <React.Fragment>
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
                  {/* <p>Currencies : {toString(data[0].currencies)}</p> */}
                  {/* <p>Languages : {data[0].languages}</p> */}
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
        <h1>Loading...</h1>
      )}
    </React.Fragment>
  );
}

export default Country;
