import React from 'react';
import SectionTitle from '../Components/SectionTitle';
import SkillsNewItem from '../Components/SkillsNewItem';

const SkillsNew = () => {
  const skillsArray = [
      {
        item: 'Shreyasi Chauhan Portfolio Website',
      },
      {
        item: 'System development and implementation',
      },
      {
        item: 'Cross-functional collaboration',
      },
      {
        item: 'Inventory management system design',
      },
      {
        item: 'System test plan development',
      },
      {
        item: 'System process and procedure documentation',
      },
      {
        item: 'Stakeholder communication',
      },
      {
        item: 'Business requirement analysis',
      },
    ];

  return (
    <div id="skillsNew" className="w-[full] overflow-hidden-web flex justify-center">
      <div className="w-full xl:w-[70%] flex flex-col">
        <div className="mt-[15%]">
          <SectionTitle title="SKILLS NEW"/>
        </div>
        <div className="w-full flex flex-wrap justify-center">
        {skillsArray.map((project, index) => (
            <div className="w-[auto] h-[auto] m-3 hover:transform hover:scale-125 transition-transform duration-300 ease-in-out" key={index}>
              <SkillsNewItem
                item={project.item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsNew;
