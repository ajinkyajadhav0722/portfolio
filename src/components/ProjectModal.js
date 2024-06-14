import { Modal, Button } from "react-bootstrap";
import './modal.css';

export const ProjectModal = ({ show, handleClose, project }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title  style={{ color: 'black' }}>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ color: 'black' }} >{project.extendedDescription}</p>
        {project.videoUrl && (
          <video width="100%" height="auto" controls>
            <source src={project.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'black' }} >
          Github Repo
          </a>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
