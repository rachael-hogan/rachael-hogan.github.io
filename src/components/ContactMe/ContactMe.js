import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub, AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import homeLogo from "../../Assets/programmer.svg";

function ContactMe() {
    return (
        <Container fluid className="contact-me-section" id="contact-me">
            <Container>
                <Row>
                    <Col md={6}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: "450px" }}
                            />
                    </Col>
                    <Col md={6} className="contact-me-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="blue">connect </span>with me
                        </p>
                        <ul className="contact-me-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/rachael-hogan"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  contact-me-icons"
                                >
                                    <AiFillGithub/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/rachaelhogan13/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  contact-me-icons"
                                >
                                    <FaLinkedinIn/>
                                </a>
                            </li>
                        </ul>
                        <ul className="email-links">
                            <li className="email-icons">
                                <a
                                    href="mailto:rachaelhogan13@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  contact-me-icons"
                                >
                                    <AiOutlineMail/>
                                </a>
                            </li>
                            <li className="email-icons">
                                rachaelhogan13@gmail.com
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ContactMe;
