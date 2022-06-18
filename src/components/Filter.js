import { useState } from "react";

function Filter(props) {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setInputValue("");
    console.log(inputValue);
  };

  const onInputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onSelectHandler = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <div className="filter-container">
      <form className="filter-container__form" onSubmit={onSubmitHandler}>
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass" />
        </button>
        <input
          onChange={onInputHandler}
          value={inputValue}
          type="text"
          placeholder=" Search a country..."
        />
      </form>
      <div className="filter-container__filterSelect">
        <label htmlFor="filter">Filter by Region</label>
        <select id="filter" onChange={onSelectHandler}>
          <option>hi</option>
          <option>hi</option>
          <option>hi</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
