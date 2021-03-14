import React from "react";
import styled from "styled-components";

function Header() {
  return <Container>Personal Wallet UI</Container>;
}

export default Header;

const Container = styled.div`
  background: blue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  font-size: 25px;
`;
