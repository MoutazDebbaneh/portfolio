import { Col } from "react-bootstrap";

export default function ProjectCard({
  title,
  description,
  imgUrl,
  gallery,
  tag,
  github,
  colab,
  handleProjectClick,
}) {
  return (
    <Col sm={6} md={4}>
      <div
        className="proj-imgbx"
        onClick={() =>
          handleProjectClick({
            title,
            description,
            imgUrl,
            gallery,
            github,
            colab,
          })
        }
      >
        <img src={imgUrl} alt={`${title}`} loading="lazy" />
        <span className="badge img-tag bg-dark">{tag}</span>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}
