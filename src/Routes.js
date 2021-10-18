import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import BeerList from "./Pages/BeerList/BeerListPage";
import GlobalStyles from "./Styles/GlobalStyles";

const Routes = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/beerlist" component={BeerList} />
      </Switch>
    </Router>
  );
};

export default Routes;
