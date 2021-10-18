import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <MainContainer>
      <div>
        <h3>Welcome to the BEST craft beer online store. </h3>
        <p>
          Pick your selection of craft beer <br />
          from hundreds of different craft beers
        </p>
        <DiscoverBtn>
          <Link to="/beerlist">Discover</Link>
        </DiscoverBtn>
      </div>
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 30vh;
  background-image: url("https://images.unsplash.com/photo-1585620384249-5cf9442c87f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=963&q=80");
  background-size: cover;
  color: #ffffff;
  height: 100vh;

  h3 {
    font-size: 30px;
    padding-bottom: 3vh;
  }

  p {
    font-size: 16px;
    padding-bottom: 5vh;
  }
`;

const DiscoverBtn = styled.button`
  width: 100px;
  font-size: 16px;
  color: #ffffff;
  background-color: #fbc202;
  padding: 10px;
  border: none;
  border-radius: 10%;

  a {
    text-decoration: none;
    color: inherit;
  }
`;
