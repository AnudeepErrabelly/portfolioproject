import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import leaf from "../../Assets/Projects/leaf.png";
//import emotion from "../../Assets/Projects/emotion.png";
//import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/calci.png";
//import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/braintumor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently and will keep working to create somemore.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="python based GUI calculator"
              description="GUI based calucator designed using Tkinter which allows users to perform scientific computation"
              ghLink="https://github.com/AnudeepErrabelly/Interactive-python-GUI-based-calculator/blob/main/SE%20calci"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Brain Tumor detection system"
              description="Deep learning based tumor detection was developed uisng FLASK framework (includes front end technologies like HTML,CSS) and finally deployed to Googlr vloud, might expire now soem issues of licensing ehrn tried to view demo"
              ghLink="https://github.com/AnudeepErrabelly/Brain-tumor-detection-using-flask-deep-learning-web-application"
              demoLink="https://mlproj-v5l34ovt4q-uc.a.run.app/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
