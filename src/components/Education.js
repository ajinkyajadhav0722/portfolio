import React from 'react';

const educationData = [
  {
    year: '2020-2024',
    degree: 'Bachelor of Technology  in Computer Engineering',
    institution: 'JSPM Rajarshi Shahu College of Engineering',
    description: 'Developed a strong foundation in Artificial Intelligence, Machine Learning, and Data Structures, complemented by hands-on projects in advanced algorithm development and system optimization.'
  },
  {
    year: '2023-2024',
    degree: 'Associate Analyst Intern',
    institution: 'DENCH TECH LTD PVT, Pune',
    description: 'Streamlined data-driven decisions by creating interactive dashboards and conducting competitive analysis, while improving data quality and fostering actionable insights.'
  },
  {
    year: '2024-2026',
    degree: 'Master of Science in Engineering Managemetn',
    institution: 'Northeastern University',
    description: 'Focused on data analysis and digital product design, leveraging coursework in data mining and deep learning to extract actionable insights and solve complex problems. Active participation in projects improved skills in statistical analysis, data visualization, and decision-making.'
  
  }
];

const TimelineItem = ({ item }) => (
  <div className="timeline-item">
    <div className="timeline-content">
      <h3>{item.year}</h3>
      <h5>{item.degree}</h5>
      <h7>{item.institution}</h7>
      <p>{item.description}</p>
    </div>
  </div>
);

export const Education = () => {
  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="timeline-container">
          {educationData.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Education;