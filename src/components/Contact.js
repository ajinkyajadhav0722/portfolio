import React, { useState } from 'react';
import { Book, Briefcase } from 'lucide-react';

const timelineData = [
  {
    type: 'education',
    title: 'Northeastern University',
    subtitle: 'Master of Science Engineering Management',
    date: '2022 - 2024',
    details: [
      'Relevant Coursework: Probability and Statistics, Operations Research, Product Management, Data Mining, Business Analytics'
    ]
  },
  {
    type: 'experience',
    title: 'DENCH TECH PVT LTD',
    subtitle: 'Associate Analyst Intern',
    date: 'Summer 2023',
    details: [
      'Enhanced data-driven decision-making accuracy by 20% through detailed data analysis',
      'Built interactive dashboards with dynamic filters and drill-downs using Tableau and Power BI, increasing stakeholder engagement by 25%',
      'Created machine learning models, improving forecast accuracy by 35% via advanced feature engineering and hyperparameter tuning'
    ]
  },
  {
    type: 'education',
    title: "JSPM's Rajarshi Shahu College of Engineering",
    subtitle: 'BTech Computer Engineering',
    date: '2018 - 2022',
    details: [
      'GPA: 3.7',
      'Relevant coursework: Agile Methods, Software Testing, Data Management, Calculus, UX Design, and Database Systems'
    ]
  }
];

const TimelineItem = ({ data, onClick }) => {
  const Icon = data.type === 'education' ? Book : Briefcase;

  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={onClick}>
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-300 mb-2">
        <Icon size={16} color="white" />
      </div>
      <div className="text-sm font-semibold">{data.date}</div>
    </div>
  );
};

const Popup = ({ data, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white rounded-lg shadow-md p-4 w-1/3">
      <h3 className="text-xl font-bold mb-2">{data.title}</h3>
      <p className="text-gray-600 mb-2">{data.subtitle}</p>
      <ul className="list-disc pl-5">
        {data.details.map((detail, index) => (
          <li key={index} className="text-gray-700 mb-1">{detail}</li>
        ))}
      </ul>
      <button onClick={onClose} className="mt-4 bg-blue-500 text-white rounded py-2 px-4">Close</button>
    </div>
  </div>
);

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="contact" id="connect" style={{ paddingTop: "50px" }}>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">My Journey</h2>
        <div className="flex justify-between relative">
          {timelineData.map((data, index) => (
            <TimelineItem 
              key={index}
              data={data}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        {activeIndex !== null && (
          <Popup data={timelineData[activeIndex]} onClose={() => setActiveIndex(null)} />
        )}
      </div>
    </section>
  );
};

export default Contact;
