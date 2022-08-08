import React from "react";
import "./index.css";
import { Container, Col, Row } from "react-bootstrap";
import ImageSection from "../../assets/img/lexis.png";
import ButtonPrimary from "../../components/buttonprimary/Button";

const Lexis = () => {
  return (
    <div className="lexis">
      <Container>
        <Row className="d-flex align-items-center">
          <Col xl={5}>
            <div className="header">
              <p className="title">Landing Page</p>
              <h3>Lexis: Best Interior Design for Your Home</h3>
              <p>This is not a real project. but in this study case I made a design with a different style to my previous design.</p>
              <ButtonPrimary>Case study in progress</ButtonPrimary>
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
