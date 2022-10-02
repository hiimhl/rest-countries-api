import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import { countiesFetch, ICounty } from "../api";
import { stringify } from "querystring";

const Wrapper = styled.div`
  width: 90%;
  height: 92vh;
  max-width: 1440px;
  margin: auto;
`;
const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
`;
const InputForm = styled.form`
  background-color: ${(props) => props.theme.elementsColor};
  color: ${(props) => props.theme.inputColor};
  border-radius: 5px;

  -webkit-box-shadow: 5px 3px 15px 3px ${(props) => props.theme.shadowColor};
  box-shadow: 5px 3px 15px 3px ${(props) => props.theme.shadowColor};

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding-left: 15px;

    svg {
      font-size: 17px;
      color: ${(props) => props.theme.inputColor};
    }
  }
  input {
    padding: 10px 40px 10px 10px;
    border: none;
    background-color: ${(props) => props.theme.elementsColor};

    &:focus {
      outline: none;
    }
  }
`;
const SelectForm = styled(InputForm)`
  label {
    cursor: pointer;
    padding: 10px 25px;
  }
  select {
    margin-top: 3px;
    background-color: ${(props) => props.theme.elementsColor};
    color: ${(props) => props.theme.textColor};
    &:focus {
      outline: none;
    }

    cursor: pointer;
    padding: 10px 25px;
    border: none;
    border-radius: 5px;
  }
`;
const MyUl = styled.ul``;

function Home() {
  const { data, isLoading } = useQuery<ICounty>(
    ["counties", "nowCounties"],
    countiesFetch
  );
  // console.log(data);

  return (
    <Wrapper>
      <SearchContainer>
        <InputForm>
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input placeholder="Search for a country..." />
        </InputForm>
        <SelectForm>
          <select>
            <option value="hi" selected hidden>
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </SelectForm>
      </SearchContainer>
      <MyUl>
        <li>
          <img alt="hi" />
          <h5>Germany</h5>
          <p>
            <strong>Population:</strong> 123 <br />
            <strong>Region:</strong> Europe <br />
            <strong>Capital:</strong> Berlin
          </p>
        </li>
        <li>
          <img alt="hi" />
          <h5>Germany</h5>
          <p>
            <strong>Population:</strong> 123 <br />
            <strong>Region:</strong> Europe <br />
            <strong>Capital:</strong> Berlin
          </p>
        </li>
      </MyUl>
    </Wrapper>
  );
}

export default Home;