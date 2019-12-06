import React from "react";
import { Col, Row, Container } from "reactstrap";
import "./banner.sass";
import Header from "../../header"

const Banner = () => {
  return (
    <>
      <div className="banner">
        <Container >
          <Row >
            <Col lg="6" >
              <Header/>
            </Col>
          </Row>
          <h1 className="title-big">Our Coffee</h1>
        </Container>
      </div>
    </>
  );
};

export default Banner;
