import React from "react";
import "./index.css";
import { Container, Col, Row, Button } from "react-bootstrap";
export const HeroSection = () => {
  return (
    <div className="heroSection" id="home">
      <Container>
        <Row>
          <Col className="title" xl={12}>
            <h1>
              Love design, code and all things about <span>technology.</span>
            </h1>
            <p>Fasha Fadillah is a user interface designer and also front-end developer.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
