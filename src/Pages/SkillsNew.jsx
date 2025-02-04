import React from 'react';
import SectionTitle from '../Components/SectionTitle';
import SkillsNewItem from '../Components/SkillsNewItem';

const SkillsNew = () => {
  const skillsArray = [
    {
      item: 'Stakeholder Communication',
    },
    {
      item: 'Business Requirements Gathering',
    },
    {
      item: 'Cross-functional Collaboration',
    },
    {
      item: 'Business Requirements Analysis',
    },
    {
      item: 'Scrum',
    },
    {
      item: 'Sprint Planning',
    },
    {
      item: 'Backlog Refinement',
    },
    {
      item: 'Data Mapping',
    },
    {
      item: 'Guidewire Billing Center',
    },
    {
      item: 'Guidewire Policy Center',
    },
    {
      item: 'Feature Release Plan'
    },
    {
      item: 'Project Planning and Organization'
    },
    {
      item: 'UAT Testing',
    },
    {
      item: 'Risk Managment',
    },
    {
      item: 'End-to-end Feature Delivery',
    },
    {
      item: 'MS Excel',
    },
    {
      item: 'JIRA',
    },
    {
      item: 'Confluence',
    },
    {
      item: 'Java',
    },
    {
      item: 'JavaScript',
    },
    {
      item: 'Python',
    },
    {
      item: 'SQL',
    },
    {
      item: 'HTML',
    },
    {
      item: 'CSS',
    },
    {
      item: 'Node',
    },
    {
      item: 'React',
    },
    {
      item: 'Vite',
    },
    {
      item: 'Tailwind',
    },
    {
      item: 'RPA',
    },
    {
      item: 'Git',
    },
    {
      item: 'GitHub',
    },
    {
      item: 'Jenkins',
    },
    {
      item: 'CLI',
    },
    {
      item: 'Visual Studio',
    },
    {
      item: 'CI/CD',
    },
    {
      item: 'Docker',
    },
    {
      item: 'Data Structures & Algorithms',
    },
    {
      item: 'OOP',
    },
    {
      item: 'Agile Developement',
    },
    ];

  return (
    <div id="skillsNew" className="w-[full] overflow-hidden-web flex justify-center">
      <div className="w-full xl:w-[70%] flex flex-col"> 
        <div className="mt-[15%]">
          <SectionTitle title="SKILLS"/>
        </div>
        <div className="w-full flex-wrap flex justify-start">
          {skillsArray.map((skill, index) => (
            <div className="w-[auto] h-[auto] m-1.5 hover:transform hover:scale-105 duration-500 ease-in-out" key={index}>
              <SkillsNewItem
                item={skill.item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsNew;
