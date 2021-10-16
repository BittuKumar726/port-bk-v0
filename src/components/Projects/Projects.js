import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// import leaf from "../../Assets/Projects/leaf.png";
import speech from "../../Assets/Projects/speech.jpg";
import onlineExam from "../../Assets/Projects/online-exam.jpg";
import covid from "../../Assets/Projects/corona1.jfif";
import chat from "../../Assets/Projects/chat1.jpg";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onlineExam}
              isBlog={false}
              title="Online Examination System"
              description={
                "-> Online Examination System is a technology-driven way to simplify examination activities like defining exam patterns with question banks, defining exam timer, objective/ subjective question sections, conducting exams using the computer or mobile devices in a paperless manner."
              }
              link=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speech}
              isBlog={false}
              title="Speech Recognition"
              description={`-> Speech recognition is to convert speech into a sequence of words by  a computer program.
              -> Speech recognition applications include voice user interface such as voice dialing.
              -> As the most natural communication modality for humans, the ultimate dream of speech recognition is to enable people to communicate more naturally and effectively.
              -> User can easily control the system & play with personal assistance.`}
              link="https://github.com/BittuKumar726/SpeechRecognition.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="COVID-19 TRACKER"
              description={`-> The World Health Organization has declared the outbreak of the novel coronavirus, Covid-19 as pandemic across the world. With its alarming surge of affected cases throughout the world, lockdown, and awareness (social distancing, use of masks etc.) 
              -> This application is designed to track the current covid case in the world and also country wise. `}
              link="https://bittukumar726.github.io/covid-19-tracker/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Real Time Chat Application"
              description={`-> Developed a real time chat application where the users can create their Username & start chatting with the other people in the chat room.`}
              link="https://chatvet.herokuapp.com/index.html"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
