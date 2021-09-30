import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import File_Sharing from "../../Assets/Projects/File_Sharing.png";
import Social_Media from "../../Assets/Projects/Social_Media.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="crimson">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Social_Media}
              isBlog={false}
              title="Social Media App"
              description="Explore the capabilities of the MERN stack by implementing social media features, such as post sharing, liking, commenting, following friends, and an aggregated newsfeed. The main purpose of this application is to demonstrate how to use the MERN stack technologies to implement features that allow users to connect orfollow each other, and interact over shared content."
              link="https://social-media-client-navy.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={File_Sharing}
              isBlog={false}
              title="File Sharing App"
              description="In this project we will build API for a file sharing app using Node Js, Express Js and Mongo DB and I will learn how to upload a file in Node Js. For that we will use a package called Multer. We will also use nodemailer to send emails from our node server. Finally we will deploy this project on the live server. We will deploy it on Heroku server "
              link="https://file-share-frontend.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
