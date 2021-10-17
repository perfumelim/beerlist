import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <NavContainer>
      <p>header</p>
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.header`
  width: 100vw;
  height: 10vh;
  margin: 0;
  background-color: #000000;
  color: #ffffff;
`;
