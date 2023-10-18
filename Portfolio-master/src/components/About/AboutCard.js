import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Anudeep Errabelly </span>
            from <span className="purple"> Oklahoma state university, stillwater usa.</span>
            <br /> I am a Graduate student pursuing computer science(Ms) at Oklahoma state university Stillwater.
            <br />
            Additionally, I would be an upcomming PhD student at OSU  from spring 2024
            <br />
            <br />
            Apart from Academics,I love to  work on project which would help vegetative patients to express their feelings via EEG signals
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Love to research on Brain wave eeg , Machine learning & AI applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Love to write research methadologies
            </li>
            <li className="about-activity">
              <ImPointRight /> playing VR games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Stay foolish and stay Hungry!!"{"    "}
          </p>
          <footer className="blockquote-footer">Anudeep Errabelly</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
