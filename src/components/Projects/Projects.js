import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import IIITBuyNSell from "../../Assets/Projects/IIITBuyNSell.png";
import Pocket_News from "../../Assets/Projects/Pocket_News.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Few <strong className="crimson">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pocket_News}
              isBlog={false}
              title="Pocket News"
              description="This project is a simple and easy-to-use news platform that provides short news summaries, much like Inshorts, so users can quickly catch up on the latest stories. Besides reading news, users can comment on articles and connect with people who have similar interests. The platform is designed to be mobile-friendly, allowing users to stay updated and engaged anytime, anywhere."
              link="https://github.com/ktiwari598/pocket-news"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IIITBuyNSell}
              isBlog={false}
              title="IIIT BuyNSell"
              description="This project is a dedicated platform developed for the IIITDM Jabalpur community, enabling students and faculty members to conveniently buy and sell pre-owned items within the campus. It eliminates the need for physical effort and time spent searching for buyers or sellers. Additionally, the platform features a Lost & Found section, allowing users to report lost belongings and facilitating their return to the rightful owners in an organized and efficient manner."
              link="https://github.com/ktiwari598/IIITBuyNSell"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
