import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Banner from "../../staticElements/banner";
import AboutBeans from "../../staticElements/aboutBeans";
import CoffeeItems from "../../coffeeItems/coffeeItems";
import { withRouter } from "react-router-dom";
import Service from "../../../services/service";
import Spinner from "../../spinner";
import ErrorMessage from "../../errorMessage";
import "./coffee.sass";

export default class CoffeePage extends Component {
  data = new Service();

  state = {
    arr: [],
    arr2: [],
    loading: true,
    error: false
  };

  getInfo = () => {
    this.data.getCoffee()
      .then(items => {
        this.setState({ arr: items, arr2: items, loading: false });
      })
      .catch(error => this.setState({ error: true, loading: false }));
  };

  componentDidMount() {
    this.getInfo();
  }

  filter = arg => {
    this.setState(({ arr }) => {
      let newArr = arr.filter(item => {
        if (arg == item.country) {
          return item;
        }
      });
      return {
        arr2: newArr
      };
    });
  };

  render() {
    const { loading, error } = this.state;
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorMessage />;
    }

    return (
      <>
        <Banner />
        <div className="shop">
          <Container>
            <AboutBeans />
            <Row>
              <Col lg={{ size: 4, offset: 2 }}>
                <form action="#" className="shop__search">
                  <label className="shop__search-label" htmlFor="filter">
                    Looking for
                  </label>
                  <input
                    id="filter"
                    type="text"
                    placeholder="start typing here..."
                    className="shop__search-input"
                  />
                </form>
              </Col>
              <Col lg="4">
                <div className="shop__filter">
                  <div className="shop__filter-label">Or filter</div>
                  <div className="shop__filter-group">
                    <button
                      onClick={() => {this.filter("Brazil");}}
                      className="shop__filter-btn"
                    >
                      Brazil
                    </button>
                    <button
                      className="shop__filter-btn"
                      onClick={() => {this.filter("Kenya");}}
                    >
                      Kenya
                    </button>
                    <button
                      className="shop__filter-btn"
                      onClick={() => {this.filter("Columbia");}}
                    >
                      Columbia
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={{ size: 10, offset: 1 }}>
                <div className="shop__wrapper">
                  <CoffeeItems
                    itemsToShow={this.state.arr2}
                    onItemSelected={name => {this.props.history.push(`/coffeepage/${name}`);}}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

withRouter(CoffeePage);