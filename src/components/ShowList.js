import Card from "./UI/Card";
import { useEffect, useState } from "react";

function ShowList(props) {
  const [countries, setCountries] = useState([]);
  const getCountries = async () => {
    const json = await (
      await fetch("https://restcountries.com/v3.1/all")
    ).json();
    // setCountries(json.data.all)
    setCountries(json);
  };
  useEffect(() => {
    getCountries();
  }, []);
  console.log(countries);

  return (
    <div>
      {countries.map((item) => {
        <Card key={item.name} flags={item.flags.png} name={item.name} />;
      })}
    </div>
  );
}

export default ShowList;
