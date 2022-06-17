import React, { useEffect, useState } from "react";

function Country({ data }) {
  const [bool, setBool] = useState(false);
  useEffect(() => {
    if (data.length !== 0) {
      setBool(true);
      console.log(data[0].borders);
    }
  });
  return (
    <React.Fragment>
      {bool ? (
        <div>
          <img src={data[0].flags.png} alt={data[0].name.common} />
          <ul>
            <h2>{data[0].name.common}</h2>
            <li>
              <div>
                <p>Native Name : {data[0].name.common}</p>
                <p>Population : {data[0].population}</p>
                <p>Region : {data[0].region}</p>
                <p>Sub Region : {data[0].subregion}</p>
                <p>Capital : {data[0].capital}</p>
              </div>
              <div>
                <p>Top Level Domain : {data[0].tld}</p>
                {/* <p>Currencies : {toString(data[0].currencies)}</p> */}
                {/* <p>Languages : {data[0].languages}</p> */}
              </div>
            </li>
            <li>
              Border Countries :
              {data[0].boders === undefined
                ? " Sorry, I don't know"
                : data[0].borders.map((b) => (
                    <span className="border">{b}</span>
                  ))}
            </li>
          </ul>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </React.Fragment>
  );
}

export default Country;
