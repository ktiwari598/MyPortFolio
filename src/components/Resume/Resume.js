import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import Linkcontent from "./Link";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/Raj_Agrawal_Mohit_Software_Engineer.pdf";

function Resume() {
  const uri = "https://vercel-backend-api-for-portfolio.vercel.app/ranks";
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteHackerank(res.data.message[0].hackerrank);
        upadteCgpa(res.data.message[1].cgpa);
        upadateSem(res.data.message[2].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="KRISHIFY | Software Engineer Intern"
              date="March 2021 - May 2021"
              content={[
                " Worked on designing and writing frontend logic for web app of krishify.",
                " Used technology like React, Redux, Next.js, Material UI, CSS3 and Javascript ES6.",
              ]}
            />
            <Resumecontent
              title="Frontend and Backend Developer - Smart Room Ventilator, IIITDM Jabalpur"
              date="Feb 2020 - August 2020"
              content={[
                " Real time monitoring the quality of air and analyzing the data on an web app and also control device features like (ON/OFF, Notification, Fan Speed etc.) using web app.",
                " Sponsored by DIC, MHRD, Govt. Of India and Mentor by Dean of Discipline and Dean of Academic",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="AI Exhibition Coordinator  [ INVICTA'20 Technical Fest of IIITDM Jabalpur ]"
              content={[
                "Worked on a labeling image dataset and coordinate fest",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Electronic and Communication [ PDPM IIITDM ] "
              date="2018 - Present"
              content={[`CGPA: ${7.4} (Till ${6}th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD [Manav Bharti National Public School, Gaya]"
              date="2015 - 2017"
              content={["Precentage: 82%"]}
            />
            <Resumecontent
              title="10TH BOARD [Holy Public School, Gaya] "
              date="2011 - 2015"
              link="Github.com"
              content={["Precentage: 90%"]}
            />
            <h3 className="resume-title">Coding Profile</h3>
            <Linkcontent
              title="Leetcode"
              link="https://leetcode.com/The_explore/"
            />
            <Linkcontent
              title="HackerRank"
              link="https://www.hackerrank.com/rajagrawalmohit2"
            />
            <Linkcontent
              title="Geeksforgeeks"
              link="https://auth.geeksforgeeks.org/user/rajagrawalmohit2/practice/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
