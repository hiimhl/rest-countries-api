function Button(props) {
  return <button onChange={props.onClickHandler}>{props.children}</button>;
}

export default Button;
