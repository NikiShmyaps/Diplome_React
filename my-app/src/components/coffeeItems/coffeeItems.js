import React, { Component } from "react";
import Service from "../../services/service";

import Spinner from "../spinner";
import "./coffeeItems.sass";


export default class CoffeeItems extends Component {
  data = new Service();

  state = {
    items: null
  };

  getInfo() {
    this.data.getCoffee().then(items => {
      this.setState({ items });
    });
  }
  componentDidMount() {
    this.getInfo();
  }

  renderItem() {
    let item = this.state.items;
    return item.map(item => {
      const { name, url, price, country } = item;
      return (
        <>
          <div className="shop__item" 
          onClick={() => {
            this.props.onItemSelected(name)}}>
            <img
              src={url}
              alt="coffee"
            />
            <div className="shop__item-title">{name}</div>
            <div className="shop__item-country">{country}</div>
            <div className="shop__item-price">{price}</div>
          </div>
        </>
      );
    });
  }

  render() {
    const { items } = this.state;

    if (!items) {
      return <Spinner />;
    }
    const coffeeItems = this.renderItem();
    return <>{coffeeItems}</>;
  }
}