import React, { Component } from "react";
import Service from "../../services/service";

import Spinner from "../spinner";
import "./best.sass";
export default class BestItems extends Component {
  data = new Service();

  state = {
    best: null
  };

  getInfo() {
    this.data.getBestsellers().then(best => {
      this.setState({ best });
    });
  }
  componentDidMount() {
    this.getInfo();
  }

  renderItem() {
    let item = this.state.best;
    return item.map((item, index) => {
      const { name, url, price } = item;
      return (
        <div className="best__item" 
            key={index} 
            onClick={() => {this.props.onItemSelected(name);}}
        >
          <img src={url} alt="coffee" />
          <div className="best__item-title">{name}</div>
          <div className="best__item-price">{price}</div>
        </div>
      );
    });
  }

  render() {
    const { best } = this.state;

    if (!best) {
      return <Spinner />;
    }
    const items = this.renderItem();
    return <>{items}</>;
  }
}
