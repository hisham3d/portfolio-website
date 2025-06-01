import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, docUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img className="project-img" src={imgUrl} />
        <div className="proj-txtx">
          <h4><a href={docUrl} target="_blank" rel="noopener noreferrer" className="project-card-link">{title}</a></h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
