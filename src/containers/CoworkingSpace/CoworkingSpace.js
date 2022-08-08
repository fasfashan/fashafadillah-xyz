import React from "react";
import "./index.css";
import { Container, Col, Row } from "react-bootstrap";
import ImageSection from "../../assets/img/co-working.png";
import ButtonPrimary from "../../components/buttonprimary/Button";
const CoworkingSpace = () => {
  return (
    <div className="prowork" id="work">
      <Container>
        <Row className="d-flex align-items-center">
          <Col xl={5}>
            <div className="header">
              <p className="title">Website App</p>
              <h3>ProWork: Co-working Space for many business</h3>
              <p>Pro-Work is a website to help startups find the right workspace for them. In this project, I work as a UI Designer and also a Front-end Developer.</p>
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

export default CoworkingSpace;
