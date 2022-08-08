import React from "react";
import "./index.css";

import { Container, Breadcrumb } from "react-bootstrap";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <Container id="footer">
        <Breadcrumb>
          <Breadcrumb.Item href="mailto:hey@fashafadillah.xyz">Email</Breadcrumb.Item>
          <Breadcrumb.Item href="https://www.linkedin.com/in/muhamad-fasha-fadillah/" target="_blank">
            LinkedIn
          </Breadcrumb.Item>
          <Breadcrumb.Item href="https://dribbble.com/fasfashan" target="_blank">
            Dribble
          </Breadcrumb.Item>
        </Breadcrumb>
        <small>© {year} Fasha Fadillah</small>
      </Container>
    </footer>
  );
};

export default Footer;
