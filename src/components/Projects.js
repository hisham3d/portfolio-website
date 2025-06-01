import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
  {
    title: "Atari Centipede Game",
    description: "Using C++ Fundamentals and SFML",
    imgUrl: projImg1,
    docUrl: "/centipede.pdf"
  },
  {
    title: "Plants vs Zombies",
    description: "Using OOP Principles and SFML",
    imgUrl: projImg2,
    docUrl: "/pvz.pdf"
  },
  {
    title: "GitLite",
    description: "Using Data Structures and C++",
    imgUrl: projImg3,
    docUrl: "/gitlite.pdf"
  },
  {
    title: "AirControlX",
    description: "Air Traffic Control Simulation using Threads in C++",
    imgUrl: projImg4,
    docUrl: "/aircontrolx.pdf"
  },
  {
    title: "TravelEaseDB",
    description: "A frontend and backend Database Management System",
    imgUrl: projImg5,
    docUrl: "/db.pdf"
  },
];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here is a list of Projects I have completed or am currently working on:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                        // Split projects into rows of 3
                        Array.from({ length: Math.ceil(projects.length / 3) }).map((_, rowIndex) => {
                          const rowProjects = projects.slice(rowIndex * 3, rowIndex * 3 + 3);
                          return (
                            <Row
                              key={rowIndex}
                              className={`justify-content-${rowProjects.length < 3 ? 'center' : 'start'} mb-4`}
                            >
                              {rowProjects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                              ))}
                            </Row>
                          );
                        })
                      }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
