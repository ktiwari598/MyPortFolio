import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Karan Tiwari </span>
            from <span className="purple"> Varanasi, India.</span>
            <br />
            I did my graduation from Indian Institute of Information Technology, Design & Manufacturing Jabalpur. 
            I'm a passionate individual who always thrive to work
            on end to end products which develop sustainable and scalable social
            and technical systems to create impact. My strengths are I am self-motivated, hard-working and a disciplined person.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Playing Cricket
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Reading blogs of recent
              technology
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
