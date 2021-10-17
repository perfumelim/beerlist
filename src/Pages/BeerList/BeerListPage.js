import React from "react";
import BeerTable from "./Component/BeerTable";
import styled from "styled-components";

function BeerList() {
  return (
    <BeerListContainer>
      <h1>Helping YOU find the best beers</h1>
      <BeerTable />
    </BeerListContainer>
  );
}

export default BeerList;

const BeerListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7vh;
`;
