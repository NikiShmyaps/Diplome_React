import React from "react";
import { Col, Row, Container} from "reactstrap";
import {Link} from "react-router-dom";

import logoBlack from "./Logo_black.svg";
import beansLogo from "./Beans_logo_dark.svg";
import "./footer.sass";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col lg={{size:5, offset: 4}}  >
              <ul className="footer">
                <li className="footer__item">
                  <Link to="/" href="#">
                    <img src={logoBlack} alt="logo" />
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to="/coffeepage" >Our coffee</Link>
                </li>
                <li className="footer__item">
                  <Link to="/">For your pleasure</Link>
                </li>
              </ul>
            </Col>
          </Row>
          <img
            className="beanslogo"
            src= {beansLogo}
            alt="Beans logo"
          />
        </Container>
      </footer>
    </>
  );
};

export default Footer; 