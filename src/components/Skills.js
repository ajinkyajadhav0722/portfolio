import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I possess a dynamic blend of <b>data analysis and product management skills</b>,<br></br>  empowering me to thrive and innovate seamlessly in both fields.</p>
                        <h2>Data Analytics and Engineering</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Python/R</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Excel</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Data Visualization</h5>
                            </div><div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Big Data Tools</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Power BI</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Machine Learning</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>AWS</h5>
                            </div>
                            
                        </Carousel>
                        <h2>Product Management</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Market Research</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>User Research</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Agile Methodologies</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Project Management</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Stakeholder Management</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Strategic Planning</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Problem-Solving</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Communication</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
