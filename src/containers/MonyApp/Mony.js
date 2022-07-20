import React from "react";
import "./index.css";
import { Container, Col, Row } from "react-bootstrap";
import ImageSection from "../../assets/img/mony-app.png";
import ButtonPrimary from "../../components/buttonprimary/Button";
const Mony = () => {
  return (
    <div className="mony" id="work">
      <Container>
        <Row className="d-flex align-items-center">
          <Col xl={5}>
            <div className="header">
              <p className="title">Mobile App</p>
              <h3>Mony: Paying your bills become fast and efficient</h3>
              <p>Pro-Work is a website to help startups find the right workspace for them. In this project, I work as a UI Designer and also a Front-end Developer.</p>
              <ButtonPrimary>Read case study</ButtonPrimary>
            </div>
            <blockquote class="twitter-tweet">
              <p lang="in" dir="ltr">
                Gimana ya rasanya jadi admin sosmed Kominfo sekarang-sekarang ini?
              </p>
              &mdash; Fasha Fadillah (@fasfashan) <a href="https://twitter.com/fasfashan/status/1549564116376768512?ref_src=twsrc%5Etfw">July 20, 2022</a>
            </blockquote>{" "}
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
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

export default Mony;
