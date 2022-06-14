import React from "react";
import ShowList from "./components/ShowList";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <div className="all">
      <Header />
      <ShowList />
    </div>
  );
}

export default App;
