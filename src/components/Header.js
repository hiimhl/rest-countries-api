import "./All.css";

function Header(props) {
  const onColorHandler = (e) => {
    console.log("hi, handle this later");
  };
  return (
    <section className="navbar">
      <h1>Where in the World?</h1>
      <button onClick={onColorHandler}>🌙 Dark Mode</button>
    </section>
  );
}

export default Header;
