import { Container, Row, Col, Tab, Nav, Carousel } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Trade-X.png";
import projImg5 from "../assets/img/Senti.jpg";
import projImg6 from "../assets/img/loan.jpg";
import projImg7 from "../assets/img/project7.gif";
import projImg8 from "../assets/img/sales.jpeg";
import projImg9 from "../assets/img/project9.gif";
import projImg10 from "../assets/img/t20.png";
import projImg2 from "../assets/img/project2.gif";
import projImg3 from "../assets/img/churn.png";
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
import React, { useState } from "react";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const tab1Projects = [


    {
      title: "T20 world cup 2024-Analysis",
      description: "Interesting insights on the most memorable cricket league",

      imgUrl: projImg10,
      extendedDescription:
        "In these project I used the T20 worldcup dataset from kaggele. these dataset had entry of each and every delivery of all matches. I used python for data cleaning like droped some coloumns and divided data into india_batting,india_bowling and all_team. these data was then stored in sql for further analysis and quering, which was then used in PowerBI for creating dashboard. these data provides intresting insights like total runs made, total runs by indian player also some other insights like player with most golden ducks.  .",
        technologies:["SQL","python","Powber Bi","Excel"],
        achievements:["Afghanistan, Australia, and England are among the top-performing countries, with Afghanistan leading with 1,010 runs."
      ,"RG Sharma is the leading Indian batsman with 257 runs.","The highest Indian partnership is between RR Pant and RG Sharma, with 127 runs.",
      "RG Sharma, Rahmanullah Gurbaz, and Q de Kock are other top performers in boundary runs.","Rahmanullah Gurbaz from Afghanistan had the most golden ducks.","RG Sharma has the most dot balls among Indian players."],
        link: "https://github.com/ajinkyajadhav0722/T20-world-cup-2024-analysis-batting-edition-",
    },
    {
      title: "Churn Analysis",
      description: "Predict. Prevent. Retain",
      imgUrl: projImg3,
      extendedDescription:
        "Customer churn prediction is vital for businesses to maintain a competitive edge. By identifying which customers are likely to leave, companies can proactively address issues, improving customer satisfaction and retention. Accurate churn analysis helps pinpoint key factors driving customer attrition, allowing businesses to design targeted interventions that reduce churn rates and increase customer lifetime value. This predictive capability enables more efficient resource allocation, focusing efforts on retaining high-risk customers. In the long run, effective churn prediction not only preserves a loyal customer base but also enhances profitability, business sustainability, and overall growth in a competitive market.",
      technologies: ["Telcomn(Dataset)","Machine Learning","Decision Trees","  PCA","  Random Forest Classifier"," Customer Retention Strategies","Feature Engineering","Data Collection and Preprocessing",],
      achievements: ["High Predictive Accuracy: Achieved 95% accuracy in predicting customer churn using advanced machine learning techniques.",
    "Actionable Insights: Decision Trees provided clear insights into key factors driving churn, like contract type and monthly charges.",
     "Efficiency: PCA reduced data complexity, enhancing computational speed without compromising accuracy.",
     "Improved Accuracy: Random Forest Classifier aggregated multiple decision trees, boosting prediction accuracy and model robustness.",
     "Strategic Impact: Machine learning-driven analysis enables proactive customer retention strategies, fostering long-term loyalty and business growth."],

      link: "https://github.com/ajinkyajadhav0722/CHURN_PREDICTION",
    },
    {
      title: "Sentiment Analysis",
      description: "Analyzing Emotions, Guiding Decisions",
      videoUrl: video5,
      imgUrl: projImg5,
      extendedDescription:
        "The project involves the comprehensive analysis of customer feedback data from Amazon Alexa, focusing on predicting feedback (positive or negative) using machine learning models. The process starts with data cleaning and preprocessing, followed by text analysis to extract meaningful insights from customer reviews. Various machine learning models, including Random Forest, XGBoost, and Decision Tree classifiers, were trained on the preprocessed data. The models were evaluated using accuracy metrics and confusion matrices, with Random Forest achieving the highest accuracy. The project emphasizes the importance of feature scaling, model evaluation, and hyperparameter tuning in building robust predictive models.",
        technologies:["Amazon Alexa Review(dataset)","Data processing with Pandas and NumPy","ext analysis with NLTK and CountVectorizer","machine learning with Scikit-Learn and XGBoost",],
        achievements:["The majority of ratings are 5 stars (72.59%), indicating high customer satisfaction. Lower ratings (1-3 stars) are much less common.",
                      "Positive feedback is predominant (91.87%), suggesting that most reviews are favorable.",
                    "Variations like 'Black Dot' and 'Charcoal Fabric' are most common, with 'Walnut Finish' being the least frequent but highly rated.",
                     "Unique words from positive and negative reviews helped in understanding the sentiment and common themes in customer feedback.",
                    "Random Forest, XGBoost, and Decision Tree classifiers were used to predict feedback with high accuracy. Random Forest achieved the highest accuracy of 94.29% on the test set."],
      
        link: "https://github.com/ajinkyajadhav0722/Sentiment-analysis-",
    },
    {
      title: "Loan Approval Prediction",
      description:
        "Empower Your Financial Future: Predicting Loans with Precision",
      videoUrl: video6,
      imgUrl: projImg6,
      extendedDescription:
        "analyzed loan approval data with 614 samples and 13 columns. Data cleaning involved addressing missing values and dropping irrelevant columns. Categorical variables were encoded, and the data was split into training and testing sets. A Naive Bayes model achieved high recall (0.95) and accuracy (0.78), indicating good performance in identifying positive loan approvals. SVM model parameter tuning was completed using GridSearchCV but specific results were not detailed. Visualizations included a bar chart showing approval rates across categories. The analysis provides a solid foundation for understanding loan approval factors and model performance.",
        technologies:["Python","Matplotlib & Seaborn","Machine Learning Models","Accuracy, Precision, Recall, and F1 Score","Feature Encoding"],
        achievements:["Income Level Impact: Higher income levels were associated with higher loan approval rates","Loan Amount Influence: Smaller loan amounts generally led to increased approval rates.","Employment Status: Stable employment status was a strong predictor of loan approval","The Naive Bayes model demonstrated good performance in balancing precision and recall, making it a reliable choice for predicting loan approvals in this dataset.","Different loan types had varying approval rates, indicating that loan type is a crucial factor in the approval process.","Categories such as full-time and part-time employment showed distinct approval patterns, affecting overall model accuracy."," The model achieved high predictive accuracy, reflecting its effectiveness in forecasting loan approval outcomes based on the available features."],
      
      
        link: "https://github.com/ajinkyajadhav0722/Loan-predictor_site",
    },
    {
      title: "HR Data Dashboard",
      description: "Insight-driven HR decisions, at your fingertips.",
      videoUrl: video7,
      imgUrl: projImg7,
      extendedDescription:
        "In developing the HR Data Dashboard, I utilized Excel for data normalization, SQL for querying databases, and Power BI for creating interactive dashboards. This project significantly enhanced my data analytics skills by enabling me to manipulate and analyze large datasets efficiently. It provided hands-on experience in data preparation, database management, and visual data storytelling, equipping me with the expertise to derive actionable insights and drive informed decision-making in HR management",
        technologies:["HR data(Dataset)","Power BI,","Excel","SQL"],
        achievements:["Males and females have significant representation, with non-conforming individuals making up a small fraction.",
       "The largest racial group is White (28.69%).", "Other notable groups include Black or African American (16%), Asian (16.12%), and Hispanic or Latino (10.88%).",
      "Most employees fall within the age groups of 25-34, 35-44, and 45-54, with each group having substantial representation.",
     "Gender distribution across departments varies, with notable male and female representation in departments like Engineering, Sales, and Human Resources.",
     "A majority of employees work at the headquarters (76.01%), while 23.99% work remotely.","The highest concentration of employees is in Ohio (82.18%), with smaller percentages in Pennsylvania, Illinois, Indiana, Michigan, Kentucky, and Wisconsin."],
      
      
        link: "https://github.com/ajinkyajadhav0722/HR-data-analysis-",
    },
    {
      title: "EDA-Diwali Sales Analysis",
      description: "Exploratory data analysis for Diwali sales",
      extendedDescription:
        "In the project EDA-Diwali Sales Analysis delving into Exploratory Data Analysis (EDA) significantly bolstered my proficiency in data analysis. It sharpened my ability to preprocess and clean data effectively, extract meaningful insights through advanced visualization techniques, and apply statistical methods to interpret patterns and trends. This hands-on experience not only enhanced my technical skills in data manipulation and visualization but also deepened my understanding of consumer behavior and market dynamics, crucial for making data-driven decisions in future analytical endeavors.",
      technologies: [
        "Diwali Sales Data(Dataset)",
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib and Seaborn",
        "Data Cleaning"
      ],
      achievements: [
        "Geographical Insights: The majority of orders and sales come from Uttar Pradesh, Maharashtra, and Karnataka.",
        "Females are the predominant buyers and have greater purchasing power compared to males.",
        "The primary buying demographic is females aged 26-35 years.",
        "Occupational Insights: Most buyers work in the IT, Healthcare, and Aviation sectors.",
        "Product Categories: The most popular product categories are Food, Clothing, and Electronics.",
        "The top 10 most sold products in the dataset are primarily from the categories of Food, Clothing, and Electronics.",
      ],
      videoUrl: video8,
      imgUrl: projImg8,
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

    
  ];
  const tab2Projects = [
    {
      title: "Trade-X",
      description: "Smart Trades, Bigger Gains.",
      extendedDescription:
        "TradeX is an automated trading platform utilizing advanced deep reinforcement learning to predict market trends and execute profitable trades. Our bot continuously adapts to market conditions, ensuring optimal trading decisions. TradeX offers a seamless, intelligent trading experience, minimizing risks and maximizing returns.During building Trade-x I got to know about various aspects of product management like market research, Prioritizing ideas and features,Prototyping potential solutions,Creating roadmaps to guide development ",
        technologies:[
          "Deep reinforcement learning algorithms (PPO, A2C)",
          "MERN stack",
          "Python",
          "API",
        ],
        achievements:[
          "Market Oracle: Harnesses deep reinforcement learning to anticipate market moves with uncanny precision.",
          " Autopilot Trading: Seamlessly executes trades and adapts strategies in real-time, just like a seasoned trader.",
          "Risk Shield: Dynamically adjusts to market volatility, safeguarding your investments with smart stop-loss and take-profit maneuvers.",
         "Command Center: A sleek, intuitive dashboard that keeps you in control with customizable alerts and insights.",
          "Time Machine: Lets you backtest strategies against historical data and fine-tune them in a risk-free simulated environment.",
          "Fort Knox Security: Protects your data with top-tier encryption and ensures you stay compliant with financial regulations."

        ],
      
      
        videoUrl: video1,
      link: "https://github.com/ajinkyajadhav0722/TRADE-x/tree/master",
      imgUrl: projImg1,
    },
    {
      title: "FashionUP",
      description: "Your Fast-Track to Trendy Styles!",
      imgUrl: projImg2,
      extendedDescription:
        "FashionUp is a cutting-edge platform built with the MERN stack, utilizing a geolocation API to find users' locations. Our service delivers trendy clothes within 10 minutes, sourcing from local shops and promoting them or from our central godowns.Creating FashionUp enhanced my product management skills by requiring me to oversee the entire development process, coordinate with stakeholders, conduct market research.Additionally, I employed agile methodologies to iterate quickly, manage tasks efficiently, and adapt to changing requirements. Experience lightning-fast fashion delivery and support local businesses with FashionUp. Stay stylish, effortlessly and instantly!",
        technologies:[
          "MERN stack",
          "REST api",
          "Geolocation API",
        ],
        achievements:[
          "Instant Fashion Finder: Uses geolocation to identify nearby stores and display available trendy items in real-time.",
          "Lightning Delivery: Guarantees delivery of selected fashion items within 10 minutes, leveraging local shops and central godowns.",
          "Local Style Showcase: Promotes and highlights fashion from local boutiques, giving users access to unique, community-driven styles.",
          "Smart Recommendations: AI-powered suggestions based on user preferences, past purchases, and current fashion trends.",
          "Seamless Checkout: A quick and easy payment process, with multiple payment options and instant confirmation."

        ]
        ,
      
      
        link: "https://github.com/ajinkyajadhav0722/Fashion-up",
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
      title:
        "Tata Data Visualisation: Empowering Business with Effective Insights Job Simulation on Forage",
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
                        <Nav.Link eventKey="first">Data and Analytics</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Product</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Certifications</Nav.Link>
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
                        <p>
                          <b>Certifications</b>
                        </p>
                        <Carousel>
                          {certifications.map((certification, index) => (
                            <Carousel.Item key={index}>
                              <img
                                className="d-block w-50 mx-auto" // Control image size and center it
                                src={certification.imgSrc}
                                alt={certification.title}
                              />
                              <div className="carousel-caption-below">
                                <p>
                                  <b>{certification.title}</b>
                                </p>
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
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      ></img>
    </section>
  );
};
