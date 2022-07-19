import React from "react";
import "./index.css";
import { Container, Col, Row } from "react-bootstrap";
import ImageSection from "../../assets/img/lexis.png";
import ButtonSecondary from "../../components/buttonsecondary/ButtonSecondary";
const Lexis = () => {
  return (
    <div className="lexis">
      <Container>
        <Row className="d-flex align-items-center">
          <Col xl={5}>
            <div className="header">
              <p className="title">Landing Page</p>
              <h3>Lexis: Best Interior Design for Your Home</h3>
              <p>Pro-Work is a website to help startups find the right workspace for them. In this project, I work as a UI Designer and also a Front-end Developer.</p>
              <ButtonSecondary>Read case study</ButtonSecondary>
            </div>
          </Col>
          <Col xl={7}>
            <div className="ImageSection">
              <img width={"100%"} src={ImageSection} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Lexis;
