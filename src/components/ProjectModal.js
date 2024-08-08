import { Modal, Button } from "react-bootstrap";
import './modal.css';

export const ProjectModal = ({ show, handleClose, project }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title style={{ color: 'black' }}>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: 'black' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p>{project.extendedDescription}</p>

          {project.technologies && (
            <>
              <strong>Technologies & Dataset Used:</strong>
              <ul>
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </>
          )}

          {project.achievements && (
            <>
              <strong>Key Findings:</strong>
              <ul>
                {project.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </>
          )}

          {project.videoUrl && (
            <video style={{ width: '100%', height: 'auto' }} controls>
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
              Github Repo
            </a>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
