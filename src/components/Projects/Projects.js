import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import addContactVideo from "../../Assets/Projects/mailchimpAddContact.mp4"
import exportHistoryVideo from "../../Assets/Projects/MailchimpAudienceExport.mp4"
import marketplaceVideo from "../../Assets/Projects/Marketplace.mp4"
import marketplacePicture from "../../Assets/Projects/Marketplace.avif"
import exportHistoryPicture from "../../Assets/Projects/exportHistory.png"
import addContactPicture from "../../Assets/Projects/addContact.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={marketplacePicture}
                title="Marketplace"
                description="MarketPlace is a web application that allows users to post contract jobs
                 to be performed. The jobs are bid on in an auction format similar to eBay, but for
                 jobs/tasks instead of products. This repository contains both the frontend (React)
                 and backend (Kotlin with Ktor) components of the application."
                ghLink="https://github.com/rachael-hogan/marketplace"
                demoLink={marketplaceVideo}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={addContactPicture}
              isBlog={false}
              title="Mailchimp Add Contact Page"
              description="I worked on creating a modern Add Contact Page for mailchimp. Some notable work
            that went into this page includes the extensive validation for several field types, multiple input types,
            and success and error state user feedback."
              demoLink={addContactVideo}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exportHistoryPicture}
              isBlog={false}
              title="Mailchimp Export History"
              description="I modernized Mailchimp's Export History Page. Items of note for
              this specific pages are the pagination, delete and download csv."
              demoLink={exportHistoryVideo}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
