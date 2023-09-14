import { Carousel, Col, Container, Row } from "react-bootstrap";
import {
  XCircle,
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
  Github,
} from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projects from "./_Projects";

export default function Projects() {
  const [data, setData] = useState({});

  const handleProjectClick = (project) => {
    let gallery = project.gallery;
    let links = {};
    if (project.github) links.github = project.github;
    if (project.colab) links.colab = project.colab;
    setData({ gallery, links });
    document.body.classList.toggle("hide-scroll");
  };

  const handleProjectClose = () => {
    setData({});
    document.body.classList.toggle("hide-scroll");
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (data.gallery) {
        if (e.keyCode === 27) {
          // Handle Escape key press
          handleProjectClose();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [data]);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="projects section" id="projects">
      <Container>
        {data.gallery && (
          <div className="proj-modal">
            <XCircle className="proj-modal-x" onClick={handleProjectClose} />
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              variant="dark"
              slide={false}
              fade
              touch
              keyboard
              prevIcon={<ArrowLeftCircleFill className="modal-nav" />}
              nextIcon={<ArrowRightCircleFill className="modal-nav" />}
            >
              {data.gallery.map((projImg, i) => (
                <Carousel.Item key={i} className="mx-auto">
                  <div className="d-flex align-items-center justify-content-center carousel-item-container object-fit-cover">
                    <img
                      src={projImg}
                      alt="Project Image"
                      className="img-fluid mx-auto"
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>

            {data.links && data.links.github && (
              <a href={data.links.github} target="_blank">
                <button className="proj-github rounded">
                  <Github size="1.6em" /> | View on Github
                </button>
              </a>
            )}
            {data.links && data.links.colab && (
              <a href={data.links.colab} target="_blank">
                <button className="proj-colab rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="1.6em"
                    height="1.6em"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#ffb300"
                      d="M33.5,10C26.044,10,20,16.044,20,23.5C20,30.956,26.044,37,33.5,37S47,30.956,47,23.5	C47,16.044,40.956,10,33.5,10z M33.5,30c-3.59,0-6.5-2.91-6.5-6.5s2.91-6.5,6.5-6.5s6.5,2.91,6.5,6.5S37.09,30,33.5,30z"
                    ></path>
                    <path
                      fill="#ffb300"
                      d="M19.14,28.051l0-0.003C17.96,29.252,16.318,30,14.5,30C10.91,30,8,27.09,8,23.5s2.91-6.5,6.5-6.5	c1.83,0,3.481,0.759,4.662,1.976l3.75-6.024C20.604,11.109,17.683,10,14.5,10C7.044,10,1,16.044,1,23.5C1,30.956,7.044,37,14.5,37	c3.164,0,6.067-1.097,8.369-2.919L19.14,28.051z"
                    ></path>
                    <path
                      fill="#f57c00"
                      d="M8,23.5c0-1.787,0.722-3.405,1.889-4.58l-4.855-5.038C2.546,16.33,1,19.733,1,23.5	c0,3.749,1.53,7.14,3.998,9.586l4.934-4.964C8.74,26.944,8,25.309,8,23.5z"
                    ></path>
                    <path
                      fill="#f57c00"
                      d="M38.13,18.941C39.285,20.114,40,21.723,40,23.5c0,3.59-2.91,6.5-6.5,6.5	c-1.826,0-3.474-0.755-4.655-1.968l-4.999,4.895C26.298,35.437,29.714,37,33.5,37C40.956,37,47,30.956,47,23.5	c0-3.684-1.479-7.019-3.871-9.455L38.13,18.941z"
                    ></path>
                  </svg>{" "}
                  | View on Colab
                </button>
              </a>
            )}
          </div>
        )}
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Working on actual projects is the key to success. Here are some
              projects that showcase my expertise in various fields:
            </p>

            <div className="projects-grid">
              <Row>
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    {...{ ...project, handleProjectClick }}
                  />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp2}
        className="background-image-right"
        alt="background-image-right"
      />
    </section>
  );
}
