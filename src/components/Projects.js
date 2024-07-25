import { Container, Row, Col, Tab, Nav,Carousel  } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.gif";
import projImg5 from "../assets/img/project-5.gif";
import projImg6 from "../assets/img/project6.gif";
import projImg7 from "../assets/img/project7.gif";
import projImg8 from "../assets/img/project8.gif";
import projImg9 from "../assets/img/project9.gif";
import projImg10 from "../assets/img/project10.gif";
import projImg2 from "../assets/img/project2.gif";
import projImg3 from "../assets/img/churn.gif";
import video1 from "../assets/img/video1.mp4";
import video5 from "../assets/img/project-5.mp4";
import video6 from "../assets/img/project6.mp4";
import video7 from "../assets/img/project7.mp4";
import video8 from "../assets/img/project8.mp4";
import colorSharp2 from "../assets/img/color-sharp2.png";
import certImg1 from "../assets/img/pm certificate.jpg"; // Add paths for certificate images
import certImg2 from "../assets/img/cisco certificate.jpg";
import certImg3 from "../assets/img/Tata.jpg";
import certImg4 from "../assets/img/accentue.jpg";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const tab1Projects = [
    {
      title: "Trade-X",
      description: "Smart Trades, Bigger Gains.",
      extendedDescription:
        "Tech Stack: Deep reinforcement learning algorithms (PPO, A2C), MERN stack, Python, API. TradeX is an automated trading platform utilizing advanced deep reinforcement learning to predict market trends and execute profitable trades. Our bot continuously adapts to market conditions, ensuring optimal trading decisions. TradeX offers a seamless, intelligent trading experience, minimizing risks and maximizing returns.During building Trade-x I got to know about various aspects of product management like market research, Prioritizing ideas and features,Prototyping potential solutions,Creating roadmaps to guide development ",
      videoUrl: video1,
      link: "https://github.com/ajinkyajadhav0722/TRADE-x/tree/master",
      imgUrl: projImg1,
    },
    {
      title: "FashionUP",
      description: "Your Fast-Track to Trendy Styles!",
      imgUrl: projImg2,
      extendedDescription:
        "Tech Stack: MERN stack, REST api, API.FashionUp is a cutting-edge platform built with the MERN stack, utilizing a geolocation API to find users' locations. Our service delivers trendy clothes within 10 minutes, sourcing from local shops and promoting them or from our central godowns.Creating FashionUp enhanced my product management skills by requiring me to oversee the entire development process, coordinate with stakeholders, conduct market research.Additionally, I employed agile methodologies to iterate quickly, manage tasks efficiently, and adapt to changing requirements. Experience lightning-fast fashion delivery and support local businesses with FashionUp. Stay stylish, effortlessly and instantly!",
      link: "https://github.com/ajinkyajadhav0722/Fashion-up",
    },
    
    {
      title: "Churn Analysis",
      description: "Predict. Prevent. Retain",
      imgUrl: projImg3,
      extendedDescription:
        "Tech Stack: Decision Trees, Principal Component Analysis (PCA), and Random Forest Classifier | Dataset: telecommunications dataset|I explore a telecommunications dataset to forecast customer churn, a vital aspect of customer relationship management. I employ advanced machine learning techniques like Decision Trees, Principal Component Analysis (PCA), and Random Forest Classifier, achieving an impressive predictive accuracy of 95%. Decision Trees provide intuitive insights into the factors influencing churn behavior, while PCA helps in reducing data dimensionality, enhancing computational efficiency without sacrificing accuracy. Additionally, the Random Forest Classifier improves prediction accuracy by aggregating multiple decision trees. This analysis underscores the critical role of machine learning in proactive churn management within the telecommunications industry, enabling companies to anticipate and address customer attrition effectively. Leveraging these insights, telecom providers can implement targeted retention strategies, optimize customer engagement, and foster long-term customer loyalty and business sustainability..",
      link: "https://github.com/ajinkyajadhav0722/CHURN_PREDICTION",
    },
    {
      title: "Sentiment Analysis",
      description: "Analyzing Emotions, Guiding Decisions",
      videoUrl: video5,
      imgUrl: projImg5,
      extendedDescription:
        "Tech Stack:Machine learning, NLP, | dataset: Amazon Alexa review | In this sentiment analysis project, I utilize sophisticated XGBoost boosting algorithms and CountVectorizer techniques to delve into the sentiments expressed within Amazon Alexa reviews. By harnessing the power of machine learning, I aim to uncover nuanced insights from the dataset, shedding light on customer satisfaction, preferences, and feedback trends associated with Alexa products. This project not only showcases my proficiency in natural language processing and machine learning but also highlights my ability to derive actionable insights from large-scale datasets to inform strategic business decision. ",
      link: "https://github.com/ajinkyajadhav0722/Sentiment-analysis-",
    },
    {
      title: "Loan Approval Prediction",
      description:
        "Empower Your Financial Future: Predicting Loans with Precision",
      videoUrl: video6,
      imgUrl: projImg6,
      extendedDescription:
        "In this project, we analyzed a dataset encompassing demographic information such as gender and education levels, along with loan amounts. Through exploratory data analysis (EDA), we uncovered crucial patterns and insights that inform loan approval likelihood. Utilizing a random classifier model, we employed predictive analytics to enhance decision-making in financial services.Through this project, I honed my skills in data preprocessing, feature engineering, and model evaluation, ensuring robust predictive performance. This hands-on experience solidified my understanding of applying statistical techniques and machine learning algorithms to real-world datasets.",
      link: "https://github.com/ajinkyajadhav0722/Loan-predictor_site",
    },
    {
      title: "HR Data Dashboard",
      description: "Insight-driven HR decisions, at your fingertips.",
      videoUrl: video7,
      imgUrl: projImg7,
      extendedDescription:
        "Tech Stack: Power BI, Excel.| dataset:HR data | In developing the HR Data Dashboard, I utilized Excel for data normalization, SQL for querying databases, and Power BI for creating interactive dashboards. This project significantly enhanced my data analytics skills by enabling me to manipulate and analyze large datasets efficiently. It provided hands-on experience in data preparation, database management, and visual data storytelling, equipping me with the expertise to derive actionable insights and drive informed decision-making in HR management",
      link: "https://github.com/ajinkyajadhav0722/HR-data-analysis-",
    },
  ];
  const tab2Projects = [
    {
      title: "EDA-Diwali Sales Analysis",
      description: " Exploratory data analysis for Diwali sales",
      videoUrl: video8,
      imgUrl: projImg8,
      extendedDescription:
        "In the project EDA-Diwali Sales Analysis delving into Exploratory Data Analysis (EDA) significantly bolstered my proficiency in data analysis. It sharpened my ability to preprocess and clean data effectively, extract meaningful insights through advanced visualization techniques, and apply statistical methods to interpret patterns and trends. This hands-on experience not only enhanced my technical skills in data manipulation and visualization but also deepened my understanding of consumer behavior and market dynamics, crucial for making data-driven decisions in future analytical endeavors.",
      link: "https://github.com/ajinkyajadhav0722/EDA_DIWALI-SALES-ANALYSIS",
    },
    {
      title: "SQL-Music Store Sales Analysis",
      description: "Empowering Insights through SQL Mastery",
      imgUrl: projImg9,
      extendedDescription:
        "In the SQL-based Music Store Sales Analysis project, I utilized SQL queries to extract and analyze data from a comprehensive sales database of a music store. This project involved examining sales trends over time, identifying top-selling products, understanding customer preferences based on purchase behavior, and generating reports to provide actionable insights for business decisions. By applying SQL skills such as data manipulation, aggregation, and joining across multiple tables, I enhanced my proficiency in data analysis and gained valuable experience in extracting meaningful business intelligence from large datasets.",
      link: "https://github.com/ajinkyajadhav0722/musicstore_sales_analysis_SQL",
    },
    
    {
      title: "T20 world cup 2024-Analysis",
      description:
        "Interesting insights on the most memorable cricket league",
      
      imgUrl: projImg10,
      extendedDescription:
        "Tech stack: SQL|python|Powber Bi|Excel.In these project I used the T20 worldcup dataset from kaggele. these dataset had entry of each and every delivery of all matches. I used python for data cleaning like droped some coloumns and divided data into india_batting,india_bowling and all_team. these data was then stored in sql for further analysis and quering, which was then used in PowerBI for creating dashboard. these data provides intresting insights like total runs made, total runs by indian player also some other insights like player with most golden ducks.  .",
      link: "https://github.com/ajinkyajadhav0722/T20-world-cup-2024-analysis-batting-edition-",
    },
    
  ];

  const certifications = [
    {
      title: "Google Project Management",

      imgSrc: certImg1, // Add image source
    },
    {
      title: "Cisco-Data Analytics Essentials",
      
      imgSrc: certImg2, // Add image source
    },
    {
      title: "Tata Data Visualisation: Empowering Business with Effective Insights Job Simulation on Forage",
      imgSrc: certImg3, // Add image source
    },
    {
      title: "Data Analytics and Visualization Job Simulation by Accenture",
      imgSrc: certImg3, // Add image source
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects & Certifications</h2>
                  <p>
                    Working on these projects has significantly enhanced my
                    skills by providing hands-on experience in both{" "}
                    <b>product management and data analysis</b>. I've learned to
                    conduct market and user research, apply agile methodologies,
                    and develop detailed product roadmaps. Additionally, I've
                    gained proficiency in data analysis techniques, enabling me
                    to derive insights from complex datasets.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {tab1Projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {tab2Projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p><b>Certifications</b></p>
                        <Carousel>
                          {certifications.map((certification, index) => (
                            <Carousel.Item key={index}>
                              <img
                                className="d-block w-50 mx-auto" // Control image size and center it
                                src={certification.imgSrc}
                                alt={certification.title}
                              />
                              <div className="carousel-caption-below">
                                <p><b>{certification.title}</b></p>
                                
                              </div>
                            </Carousel.Item>
                          ))}
                        </Carousel>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  );
};