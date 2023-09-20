// VolunteerExperience.jsx
import React from 'react';
import SectionTitle from '../Components/SectionTitle';
import VolunteerExperienceItem from '../Components/VolunteerExperienceItem';

const VolunteerExperience = () => {
  const volunteerExperienceData = [
    {
      title: 'Volunteer Experience #1',
      content: 'This is the content for the first volunteer experience.',
    },
    {
      title: 'Volunteer Experience #2',
      content: 'This is the content for the second volunteer experience.',
    },
    {
      title: 'Volunteer Experience #3',
      content: 'This is the content for the third volunteer experience.',
    },
    // Add more volunteer experience data as needed
  ];

  return (
    <div className="w-[80%] flex justify-center">
      <div className="w-[80%] mt-5 mb-10">
        <div className="w-80% h-[20%] mt-[20%] mb-[15%]">
          <SectionTitle title="VOLUNTEER EXPERIENCE" subtitle="Other stuff that I do" />
        </div>
        <div id="accordionExample">
          {volunteerExperienceData.map((experience, index) => (
            <VolunteerExperienceItem
              key={index}
              title={experience.title}
              content={experience.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerExperience;
