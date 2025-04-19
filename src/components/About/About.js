import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="crimson">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="crimson">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Techstack iconName="devicon-java-plain-wordmark" />  
        <Techstack iconName="devicon-cplusplus-plain-wordmark" />  
        <Techstack iconName="devicon-javascript-plain" />  
        <Techstack iconName="devicon-mysql-plain-wordmark" />  
        <Techstack iconName="devicon-mongodb-plain-wordmark" />  
        <Techstack iconName="devicon-amazonwebservices-plain-wordmark" />
        <Techstack iconName="devicon-kubernetes-plain-wordmark" /> 
        <Techstack iconName="devicon-docker-plain-wordmark" /> 
        <Techstack iconName="devicon-linux-plain" /> 
        <Techstack iconName="devicon-git-plain-wordmark" /> 
        <Techstack iconName="devicon-elasticsearch-plain-wordmark" /> 
        <Techstack iconName="devicon-redis-plain-wordmark" /> 
        </Row>
        <h1 className="project-heading">
          <strong className="crimson">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="cib-visual-studio-code" />
          <Techstack iconName="cib-anaconda" />
          <Techstack iconName="cib-heroku" />
          <Techstack iconName="cib-postman" />
          <Techstack iconName="cib-gitlab" />
        </Row>
      </Container>
    </Container>
  );
}

export default About;
