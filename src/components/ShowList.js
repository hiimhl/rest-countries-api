import Card from "./UI/Card";
import { useEffect, useState } from "react";
import "./All.css";

function ShowList(props) {
  const [countries, setCountries] = useState([]);
  const getCountries = async () => {
    const json = await //
    (await fetch("https://restcountries.com/v3.1/all"))
      .json()
      .catch(console.log("error"));
    // setCountries(json.data.all)
    setCountries(json);
  };
  useEffect(() => {
    getCountries();
  }, []);
  console.log(countries);

  return (
    <ul className="countries-list">
      {countries.map((item) => {
        return (
          <Card
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
  );
}

export default ShowList;
