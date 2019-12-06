import React from "react";
import { Col, Row, Container } from "reactstrap";
import Banner from "../../staticElements/banner";
import AboutBeans from "../../staticElements/aboutBeans";
import CoffeeItems from "../../coffeeItems/coffeeItems";
import {withRouter} from "react-router-dom";
import "./coffee.sass";

const CoffeePage = ({history}) => {
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
                  <button className="shop__filter-btn">Brazil</button>
                  <button className="shop__filter-btn">Kenya</button>
                  <button className="shop__filter-btn">Columbia</button>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={{size: 10, offset: 1}}>
              <div className="shop__wrapper">
                <CoffeeItems 
                  onItemSelected={name => {
                    history.push(`/coffeepage/${name}`);
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default withRouter(CoffeePage);
