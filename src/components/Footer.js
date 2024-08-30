import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <br className="footer-break"></br>
      <Row>
        <Col className="footer-copywright">
          <h3>Designed and Developed by <a href="https://github.com/soumyajit4419/Portfolio">Soumyajit Behera</a></h3>
        </Col>
        <Col>
          <h3>Copyright © {year} SB</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
