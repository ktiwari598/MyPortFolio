import React from "react";
import Button from "react-bootstrap/Button";

function ResumeContent(props) {
  return (
    <div className="resume-item">
      <Button variant="primary" href={props.link} target="_blank">
        <i className="cil-external-link">&nbsp;</i>
        {props.title}
      </Button>
    </div>
  );
}

export default ResumeContent;
