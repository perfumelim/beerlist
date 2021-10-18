import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <NavContainer>
      <Announcement>
        <p>Buy craft beer online from Perfume's Craft Beer Shop!</p>
      </Announcement>
      <h1>Perfume's Craft Beer Shop</h1>
      <Breadcrumb>
        <ul>
          <li>
            <a href="/home">HOME</a>
          </li>
          <li>
            <a href="/beerlist">BEER COLLECTION</a>
          </li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </Breadcrumb>
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 16vh;
  margin: 0;
  background-color: #000000;
  color: #ffffff;
  box-shadow: 13px 9px 10px -9px rgba(0, 0, 0, 0.45);
  h1 {
    font-size: 30px;
  }
`;

const Announcement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 5vh;
  border-bottom: 3px solid #f3c705;
`;

const Breadcrumb = styled.div`
  padding-bottom: 2vh;

  ul {
    display: flex;
  }

  li {
    padding-left: 20px;
  }

  li:first-child {
    padding: 0;
  }
  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    color: #5a6268;
  }
`;
