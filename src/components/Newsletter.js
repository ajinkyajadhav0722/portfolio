import { Col, Row, Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const quotes = [
  "“Blogging is a conversation, not a code.” – Mike Butcher",
  "“Content is fire; social media is gasoline.” –  Jay Baer",
  "“A great product manager has the brain of an engineer, the heart of a designer, and the speech of a diplomat.” – Deep Nishar",
  "“You can’t just ask customers what they want and then try to give that to them. By the time you get it built, they’ll want something new.” – Steve Jobs",
  "“In God we trust. All others must bring data..” –  W. Edwards Deming",
  "“Data is the new oil.” –  Clive Humby",
];

export const Newsletter = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12}>
            <Carousel controls={false} indicators={false} interval={3000}>
              {quotes.map((quote, index) => (
                <Carousel.Item key={index}>
                  <h3 className="text-center">{quote}</h3>
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="text-center mt-4">
              <h5>
                Well I've got to say something too <br />catch my latest articles, blogs and my blabs!!! 
              </h5>
              <a
                href="https://medium.com/@jajinkya0202"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                <span>Let’s Go!!</span>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
