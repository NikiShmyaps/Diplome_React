import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Banner from "../../staticElements/banner";
import Service from "../../../services/service";
import Spinner from "../../spinner";
import BeansLogo from "./Beans_logo_dark.svg";
import "./itemPage.sass";

export default class ItemPage extends Component {
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
    let { itemId } = this.props;
    let item = this.state.items;
    return item.map((item,index) => {
      if (item.name === itemId) {
        const { country, price, url, description, name } = item;
        return (
          <Row key={index}>
            <Col lg={{ size: 5, offset: 1 }}>
              <img className="shop__girl" src={url} alt="coffee_item" />
            </Col>
            <Col lg="4">
              <div className="title">{name}</div>
              <img className="beanslogo" src={BeansLogo} alt="Beans logo" />
              <div className="shop__point">
                <span>Country:</span>
                {country}
              </div>
              <div className="shop__point">
                <span>Description:</span>
                {description}
              </div>
              <div className="shop__point">
                <span>Price:</span>
                <span className="shop__point-price">{price}</span>
              </div>
            </Col>
          </Row>
        );
      }
    });
  }

  render() {
    const { items } = this.state;
    if (!items) {
      return <Spinner />;
    }
    const oneItem = this.renderItem();
    return (
      <>
        <Banner />
        <section className="shop">
          <Container>
            {oneItem}
          </Container>
        </section>
      </>
    );
  }
}