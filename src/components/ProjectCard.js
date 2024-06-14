import { useState } from "react";
import { Col, Button } from "react-bootstrap";
import { ProjectModal } from "./ProjectModal";

export const ProjectCard = ({ title, description, extendedDescription, videoUrl, link, imgUrl }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const project = { title, description, extendedDescription, videoUrl, link };

  return (
    <>
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} width="100%" height="auto" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
           <br/> <Button variant="link" onClick={handleShowModal}>
              See More
            </Button>
          </div>
        </div>
      </Col>
      <ProjectModal show={showModal} handleClose={handleCloseModal} project={project} />
    </>
  );
};
