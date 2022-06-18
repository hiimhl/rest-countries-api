import "./Button.css";

function Button(props) {
  return (
    <button
      className={`button ${props.className}`}
      onChange={props.onClickHandler}
    >
      {props.contents}
    </button>
  );
}

export default Button;
