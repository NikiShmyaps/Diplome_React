import React, { Component } from "react";
import "./coffeeItems.sass";

export default class CoffeeItems extends Component {
  renderItem = () => {
    const {itemsToShow} = this.props;
    return itemsToShow.map((item,index) => {
      const { name, url, price, country } = item;
      return (
        <div className="shop__item"
          key={index} 
          onClick={() => {this.props.onItemSelected(name);}}
        >
          <img src={url} alt="coffee"/>
          <div className="shop__item-title">{name}</div>
          <div className="shop__item-country">{country}</div>
          <div className="shop__item-price">{price}</div>
        </div>
      );
    });
  };

  render() {
    return <>{this.renderItem()}</>;
  }
}