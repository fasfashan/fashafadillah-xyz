import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./index.css";
import { Container, Col, Row } from "react-bootstrap";
import ImageSection from "../../assets/img/mony-app.png";
import ButtonPrimary from "../../components/buttonprimary/Button";
import Contact from "../../pages/contact";
class Mony extends Component {
  render() {
    return (
      <Router>
        <div className="mony" id="work">
          <Container>
            <Row className="d-flex align-items-center">
              <Col xl={5}>
                <div className="header">
                  <p className="title">Mobile App</p>
                  <h3>Mony: Paying your bills become fast and efficient</h3>
                  <p>
                    This project is the output of the class I followed in{" "}
                    <a href="https://www.buildwithangga.com" target={"_blank"}>
                      buildwith angga
                    </a>
                    . Mony is an app that makes it easy for users to pay all their bills with one hand.
                  </p>

                  <Link to={"/contact"}>
                    <li>Test</li>
                  </Link>
                </div>
              </Col>
              <Col xl={7}>
                <div className="ImageSection">
                  <img width={"100%"} src={ImageSection} />
                </div>
              </Col>
            </Row>
          </Container>
          <Routes>
            <Route path="/contact" component={Contact} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Mony;
