import React from "react";
import { Col, Row, Container } from "reactstrap";
import "./mainpage.sass";
import beansLogo from "./Beans_logo.svg";
import {Link} from  "react-router-dom";
import Header from "../../header";
import AboutUs from "../../staticElements/aboutUs";
import BestItems from "../../bestsellers/best";
import {withRouter} from "react-router-dom";

const MainPage = ({history}) => {
  return (
    <>
      <div className="preview">
        <Container>
          <Row>
            <Col lg="6">
              <Header />
            </Col>
          </Row>
          <Row>
            <Col lg={{ size: 10, offset: 1 }}>
              <h1 className="title-big">Everything You Love About Coffee</h1>
              <img className="beanslogo" src={beansLogo} alt="Beans logo" />
              <div className="preview__subtitle">
                We makes every day full of energy and taste
              </div>
              <div className="preview__subtitle">Want to try our beans?</div>
              <Link to="/coffeepage" className="preview__btn">
                More
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <AboutUs />

      <section className="best">
        <Container>
          <div className="title">Our best</div>
          <Row>
            <Col lg={{ size: 10, offset: 1 }}>
              <div className="best__wrapper">
                <BestItems
                  onItemSelected={name => {
                    history.push(`/coffeepage/${name}`);
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default withRouter(MainPage);
