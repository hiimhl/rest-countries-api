import React from "react";
import Header from "./components/Header";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./components/UI/Button";
import "./index.css";
import Country from "./components/Country";

function Detail(props) {
  let id = useParams();
  const navigate = useNavigate();
  console.log(props.sendDate);
  return (
    <div className="all">
      <Header />
      <Button
        contents={"← Back"}
        onClickHandler={() => {
          navigate("/");
        }}
      />
      {/* {props.sendDate.map((props) => {
        <Country data={props} id={props.sendDate.name} />;
      })} */}
    </div>
  );
}

export default Detail;
