import React, { useState, useEffect } from "react";
import BeerTable from "./Component/BeerTable";
import styled from "styled-components";
import { Radio } from "antd";

function BeerList() {
  const [beerData, setBeerData] = useState([]);
  const [value, setValue] = useState("All");

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBeerData(data);
      });
  }, []);

  const radioBoxChangeHandler = (e) => {
    const value = e.target.value;
    setValue(value);
    if (value === "Weak") {
      setBeerData(
        beerData.filter((beerData) => {
          if (beerData.abv <= 4.5) {
            return true;
          }
          return false;
        })
      );
    }

    if (value === "Med") {
      setBeerData(
        beerData.filter((beerData) => {
          if (beerData.abv > 4.5 && beerData.abv <= 7.5) {
            return true;
          }
          return false;
        })
      );
    }
    if (value === "Strong") {
      setBeerData(
        beerData.filter((beerData) => {
          if (beerData.abv > 7.5 && beerData.abv <= 50) {
            return true;
          }
          return false;
        })
      );
    }

    if (value === "All") {
      setBeerData(beerData);
    }
  };

  return (
    <BeerListContainer>
      <h1>Helping YOU find the best beers 🍺</h1>
      <RadioContainer>
        <Radio.Group
          onChange={radioBoxChangeHandler}
          value={value}
          defaultValue={"All"}
        >
          <Radio value="All">All</Radio>
          <Radio value="Weak">Weak</Radio>
          <Radio value="Med">Med</Radio>
          <Radio value="Strong">Strong</Radio>
        </Radio.Group>
      </RadioContainer>
      <BeerTable data={beerData} />
    </BeerListContainer>
  );
}

export default BeerList;

const BeerListContainer = styled.div`
  padding: 6vh 10vw;

  h1 {
    font-size: 40px;
    padding-bottom: 3vh;
  }
`;

const RadioContainer = styled.div`
  padding-bottom: 3vh;
`;
