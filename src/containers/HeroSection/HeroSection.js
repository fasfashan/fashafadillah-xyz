import React from "react";
import "./index.css";
import { Container, Col, Row } from "react-bootstrap";

export const HeroSection = () => {
  return (
    <div className="heroSection">
      <Container>
        <Row>
          <Col className="title" xl={12}>
            <h1>
              Love design, code and all things about <span>technology.</span>
            </h1>
            <p className="text-center">HI. I’m Fasha Fadillah. I’m a user interface designer and also front-end developer.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
