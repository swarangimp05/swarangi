import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">SWARANGI PEDAMKAR </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />I am student pursuing BTech in Usha Mittal Institute of Technology, Mumbai.
            <br />
            <br />
            Apart from coding, these are my hobbies :)
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgba(238, 7, 7, 0.945)" }}>
            "{" Keep Learning,Keep Growing! "}"
          </p>
          <footer className="blockquote-footer">Swarangi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
