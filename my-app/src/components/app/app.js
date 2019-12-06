import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../footer";
import MainPage from "../pages/mainPage";
import CoffeePage from "../pages/coffeePage";
import ItemPage from "../pages/itemPage/";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path ="/" exact component={MainPage}/>
        <Route path="/coffeepage" exact component={CoffeePage}/>
        <Route path="/coffeepage/:id" render={
          ({match}) => {
            const {id} = match.params;
            return <ItemPage itemId={id}/>
          }
        }/>
        <Footer />
      </Router>
    );
  }
}
