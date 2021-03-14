import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Nav.css";

function Nav() {
  return (
    <div className="App">
      <Container>
        <Main>
          <div className="sidebar">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link to="/">All Wallets</Link>
              </li>
              <li>
                <Link to="/user">New Wallets</Link>
              </li>
              <li>
                <Link to="/checkbalance">Check Balance</Link>
              </li>
              <li>
                <Link to="/addfund">Add Funds</Link>
              </li>
              <li>
                <Link to="/spendfund">Spend Funds</Link>
              </li>
              <li>
                <Link to="/alltransction">All Transactions</Link>
              </li>
            </ul>
          </div>
        </Main>
      </Container>
    </div>
  );
}

export default Nav;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 30px auto;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
  font-size: 20px;
`;
