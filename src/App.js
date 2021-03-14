import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import AddFund from "./components/AddFund";
import AllTrans from "./components/AllTrans";
import CheckBalanc from "./components/CheckBalanc";
import Header from "./components/Header";
import Nav from "./components/Nav";
import NewWallet from "./components/NewWallet";
import SpendFund from "./components/SpendFund";
import WallestsList from "./components/WallestsList";

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header/> 
          <Main>
            <Nav/>
            <Switch>
              <Route exact path="/" component={WallestsList} />
              <Route path="/user" component={NewWallet} />
              <Route path="/checkbalance" component={CheckBalanc}/>
              <Route path="/addfund" component={AddFund} />
              <Route path="/spendfund" component={SpendFund} />
              <Route path="/alltransction" component={AllTrans} /> 
            </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display:grid;
  grid-template-rows: 40px auto;
`;

const Main = styled.div`
  display:grid;
  grid-template-columns: 260px auto;
`;
