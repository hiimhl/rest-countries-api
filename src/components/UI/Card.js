import Classes from "./Card.module.css";

function Card(props) {
  return (
    <div
      onClick={props.onClickHandler}
      className={`${Classes.card} ${props.className}`}
    >
      <img src={props.flags} alt={props.name} />
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
