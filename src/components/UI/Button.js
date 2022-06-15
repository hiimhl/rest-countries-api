import "./Button.css";

function Button(props) {
  return (
    <button className="button" onChange={props.onClickHandler}>
      {props.contents}
    </button>
  );
}

export default Button;
