import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import BeerList from "./Pages/BeerList/BeerListPage";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const Routes = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/beerlist" component={BeerList} />
      </Switch>
    </Router>
  );
};

export default Routes;

const GlobalStyles = createGlobalStyle` ${reset}; `;
