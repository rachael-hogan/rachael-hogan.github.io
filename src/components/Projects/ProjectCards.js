import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import {Modal} from "react-bootstrap";
function ProjectCards(props) {
    const [modal, openModal] = useState(false);
  return (
      <>
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
          {props.ghLink && (
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
            {"GitHub"}
        </Button>
          )}
        {"\n"}
        {"\n"}
        {props.demoLink && (
            <Button
                variant="primary"
                style={{marginLeft: "10px"}}
                onClick={()=>openModal(true)}
            >
                {"Demo"}
            </Button>
        )}
      </Card.Body>
    </Card>
    <Modal show={modal} onHide={() =>openModal(false)} centered size="lg">
        <Modal.Header closeButton>
            <Modal.Title id='ModalHeader'>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <video controls width="100%" className="videoPlayer" src={props.demoLink}></video>
            </div>
        </Modal.Body>
    </Modal>
      </>
  );
}

export default ProjectCards;
