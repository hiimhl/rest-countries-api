import { useState, useEffect } from "react";

function Filter({ data }) {
  const [regionData, setRegionData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const filterValue = [];
  const hi = [];

  const onSubmitHandler = (e) => {
    e.preventDefault();
    filterValue = [
      { input: toString(inputValue) },
      { option: toString(selectValue) },
    ];
    setInputValue("");
    setSelectValue("");
    // console.log(filterValue);
  };

  const onInputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onSelectHandler = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    //search bar && select box
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
        <select id="filter" onChange={onSelectHandler} value={selectValue}>
          <option value="none" hidden>
            Filter by Region
          </option>
          {data.length !== 0 &&
            data.map((item) => {
              return <option value={item.region}>{item.region}</option>;
            })}
        </select>
      </div>
    </div>
  );
}

export default Filter;
