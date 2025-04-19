import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import Linkcontent from "./Link";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/Karan_Tiwari_SDE.pdf";

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
              title="Goldman Sachs | Software Engineer"
              date="Jun 2024 - Ongoing"
              content={[
                " Implemented a maker-checker validation mechanism for Adjustment UI, integrating Jira APIs to enhance controls,resulting in a 60% reduction in manual operational errors",
                " Implemented Liquibase for database version control, enabling developers to easily set up and manage RDBMS tables in their local environment",
                " Implemented end to end data pipeline for TWD (Trading Wind Down) using Kafka, enabling real-time data processing and analysis",
                " Technology : Java, SpringBoot, Kafka, Liquibase, Procastinator, Sybase IQ, Slang, Jira API."
              ]}
            />
            <Resumecontent
              title="Paytm Money | Software Engineer"
              date="Jun 2022 - May 2024"
              content={[
                " Revamped Mutual Funds Portfolio backend architecture, transitioning from the existing model to On The Fly portfolio calculation, resulting in reducing AWS cost by around 500$ per month and reducing the average total processing time from around 2hrs to roughly 5min",
                " Built All In One Mutual Fund Dashboard which provides a comprehensive overview of a user’s mutual fund investments, aggregating data across various brokerage platforms to offer a unified and cohesive representation of their portfolio holdings",
                " Implemented the FIFO Invested amount logic calculation and migrated 700K users from average cost basis to the FIFO method.",
              ]}
            />
            <Resumecontent
              title="Paytm Money | Software Engineer Intern"
              date="Jan 2022 - May 2022"
              content={[
                " Researched and implemented NewtonRaphson algorithm for finding roots of a real valued function to calculate XIRR for users investments across Paytm Money Mutual Funds",
              ]}
            />
            {/* <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="SMART ROOM VENTILATOR, IIITDM JABALPUR | Full Stack Developer"
              content={[
                "Real time monitoring the quality of air and analyzing the data on an web app. Sponsored by DIC, MHRD, Govt. Of India and Mentor by Dean of Discipline and Dean of Academic",
              ]}
            /> */}
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Science Engineering [ IIITDM Jabalpur ] "
              date="2018 - 2022"
              content={[`CGPA: ${8.9}`]}
            />
            <Resumecontent
              title="12TH BOARD [Central Hindu Boys School, Varanasi]"
              date="2015 - 2017"
              content={["Precentage: 89%"]}
            />
            <Resumecontent
              title="10TH BOARD [ChandraPrabha Public School, Varanasi] "
              date="2013 - 2015"
              link="Github.com"
              content={["Precentage: 95%"]}
            />
            <h3 className="resume-title">Coding Profile</h3>
            <Linkcontent
              title="Leetcode"
              link="https://leetcode.com/u/Agni_123/"
            />
            <Linkcontent
              title="HackerRank"
              link="https://www.hackerrank.com/profile/kt123"
            />
            <Linkcontent
              title="Geeksforgeeks"
              link="https://www.geeksforgeeks.org/user/agni123/"
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
