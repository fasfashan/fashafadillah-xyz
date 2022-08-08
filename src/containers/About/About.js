import React from "react";
import "./about.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import ImageSection from "../../assets/img/foto-fasha.png";
const About = () => {
  return (
    <div className="about" id="about">
      <Container>
        <Row className="d-flex align-items-center">
          <Col xl={6}>
            <div className="header">
              <p className="title">Little about me</p>
              <h3>Fasha Fadillah is a Full-stack designer</h3>
              <p>I am a man born in Bogor in 1998. I started my career as a graphic designer, then currently work as a UI/UX designer and also a front-end developer.</p>
            </div>
          </Col>
          <Col xl={6}>
            <img width={"100%"} src={ImageSection} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
