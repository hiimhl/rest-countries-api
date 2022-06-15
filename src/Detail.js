import React from "react";
import Header from "./components/Header";
import Button from "./components/UI/Button";
import "./index.css";

function Detail(props) {
  return (
    <div className="all">
      <Header />
      <Button contents={"← Back"} />
      <div>
        <img src={props.flags} alt={props.name} />
        <ul>
          <h2>title</h2>
          <li>
            <div>
              <p>Native Name : {props.name}</p>
              <p>Population : {props.population}</p>
              <p>Region : {props.region}</p>
              <p>Sub Region : {props.name}</p>
              <p>Capital : {props.capital}</p>
            </div>
            <div>
              <p>Top Level Domain : {props.name}</p>
              <p>Currencies : {props.name}</p>
              <p>Languages : {props.name}</p>
            </div>
          </li>
          <li>
            Border Countries : <span>{props.name}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Detail;
