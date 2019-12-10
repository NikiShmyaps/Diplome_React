import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "../footer";
import MainPage from "../pages/mainPage";
import CoffeePage from "../pages/coffeePage";
import ItemPage from "../pages/itemPage/";
import ErrorMessage from "../errorMessage/errorMessage";

export default class App extends Component {
  state = {
    error: false
  }

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  render() {
    if(this.state.error){
      return <ErrorMessage/>
    }
    
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
