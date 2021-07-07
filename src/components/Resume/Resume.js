import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";

import pdf from "../../Assets/swarangi.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="E-cell Representative"
              date="June 2020 - August 2020"
              content={[
                "In this I learn volunteering and managing various events. It gave me a direction in implementing my ideas and got to get in touch with growing technologies in market."

              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Data Science Math Skills"
              content={[
                "Learned Maths for Data Science and how to apply statistics and Probability in various fields."

              ]}
            />

          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="COMPUTER SCIENCE AND TECHNOLOGY "
              date="2019 - Present"
              content={[`CGPA: 9.77 (3th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD HSC"
              date="2017 - 2019"
              content={["Precentage: 78% (Mumbai University)"]}
            />
            <Resumecontent
              title="10TH BOARD SSC "
              date="2004 - 2017"
              content={["Precentage: 95% (Mumbai University)"]}
            />


          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
