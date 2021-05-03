import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateStocksContainer from "./containers/CreateStocksContainer";
import DetailStocksContainer from "./containers/DetailStocksContainer";
import EditStocksContainer from "./containers/EditStocksContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer}></Route>
          <Route path="/create" exact component={CreateStocksContainer}></Route>
          <Route
            path="/detail/:id"
            exact
            component={DetailStocksContainer}
          ></Route>
          <Route path="/Edit/:id" exact component={EditStocksContainer}></Route>
        </BrowserRouter>
      </div>
    );
  }
}
