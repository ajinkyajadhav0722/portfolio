import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <p>
                    Feel free to reach out to me through any of the following channels:
                  </p>
                  <ul>
                    <li><h5>Email: jainkya0202@gmail.com</h5></li>
                    <li><h5>LinkedIn: <a href="www.linkedin.com/in/ajinkyajadhav0722">LinkedIn</a></h5></li>
                    <li><h5>GitHub: <a href="https://github.com/ajinkyajadhav0722">Github</a></h5></li>
                    <li><h5>Phone:</h5></li>
                  </ul>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
