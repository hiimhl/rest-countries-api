function Country(props) {
  return (
    <div>
      <img src={props.data.flags} alt={props.data.name} />
      <ul>
        <h2>title</h2>
        <li>
          <div>
            <p>Native Name : {props.data.name}</p>
            <p>Population : {props.data.population}</p>
            <p>Region : {props.data.region}</p>
            <p>Sub Region : {props.data.name}</p>
            <p>Capital : {props.data.capital}</p>
          </div>
          <div>
            <p>Top Level Domain : {props.data.name}</p>
            <p>Currencies : {props.data.name}</p>
            <p>Languages : {props.data.name}</p>
          </div>
        </li>
        <li>
          Border Countries : <span>{props.data.name}</span>
        </li>
      </ul>
    </div>
  );
}

export default Country;
