import Classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={`${Classes.card} ${props.className}`}>
      <img src={props.flags} />
      <h2>{props.name}</h2>
      <ul>
        <li>Population : {props.population}</li>
        <li>Region : {props.region}</li>
        <li>Capital : {props.capital}</li>
      </ul>
    </div>
  );
}

export default Card;
