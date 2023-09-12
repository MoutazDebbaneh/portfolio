import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

import projImg1 from "../assets/img/project-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export default function Projects() {
  const projects = [
    {
      title: "hi",
      description: "rhenerne",
      imgUrl: projImg1,
    },
    {
      title: "hi",
      description: "rhenerne",
      imgUrl: projImg1,
    },
    {
      title: "hi",
      description: "rhenerne",
      imgUrl: projImg1,
    },
    {
      title: "hi",
      description: "rhenerne",
      imgUrl: projImg1,
    },
    {
      title: "hi",
      description: "rhenerne",
      imgUrl: projImg1,
    },
    {
      title: "hi",
      description: "rhenerne",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              minus, dignissimos, perferendis m agni eaque eius nesciunt ducimus
              et quae dolores esse tempore laboriosam quasi fuga neque fugiat?
            </p>

            <div className="projects-grid">
              <Row>
                {projects.map((project, index) => (
                  <>
                    <ProjectCard key={index} {...project} />
                  </>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp2}
        className="background-img-right"
        alt="background-img-right"
      />
    </section>
  );
}
