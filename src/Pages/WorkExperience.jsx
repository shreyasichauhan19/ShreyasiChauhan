// WorkExperiencePage.jsx
import React from 'react';
import SectionTitle from '../Components/SectionTitle';
import WorkExperienceCards from '../Components/WorkExperienceCards';

const WorkExperiencePage = () => {
  const workExperienceData = [
    {
      jobTitle: 'Hackathon Coach',
      company: 'Major League Hacking',
      description: "Mentored and supported 25+ hackathons around the world. Conducted regular technical workshops on topics like - Github, Data Visualization, and Building a full-stack application. Worked with 3000+ hackers in less than 7 months. Judged 700+ technical hackathon projects. Successfully supported organizers of 5 hackathons to eliminate budgetary, logistical, and planning constraints. Providing expertise to help organize a seamless event. Acting as a link between MLH, organizers, attendees, and sponsors and maintaining clear communication with all parties throughout the process.", // Add your description here
      date: 'August 2022 - Present',
    },
    {
      jobTitle: 'Software Engineer (Co-op)',
      company: 'Cisco',
      description: " - Optimized internal API with 400k+ calls, resolving a critical timeout bug. Adjusted timeout values for Apache Cassandra, ElasticSearch, MongoDB, and Redis to optimal values. Updated 10+ projects to use the latest version of JRuby (+ dependencies) ensuring the team is using the updated version and making their workflow seamless Collaborated with the team to investigate and resolve jar file compatibility issues caused by upgrading to Gradle v7.4. Fixed the bug by replacing Grubbyjar with Warble. Created, tested, and added an additional Flink cluster to reduce the load on the existing 4. Used Apache ZooKeeper to ensure the Task and Job Managers were communicating with each other.", // Add your description here
      date: 'May 2021 - September 2022',
    },
    // Add more work experience data as needed
  ];

  return (
    <div className="w-[80%] flex justify-center">
      <div className="w-[80%] mt-10 mb-10 ">
        <div className="w-80% h-[20%] mt-[1%] mb-[5%]">
          <SectionTitle title="WORK EXPERIENCE" subtitle="What I have been up to" />
        </div>
        <ol className="border-l-8 border-dotted border-primary-900">
          {workExperienceData.map((experience, index) => (
            <WorkExperienceCards
              key={index}
              jobTitle={experience.jobTitle}
              company={experience.company}
              description={experience.description}
              date={experience.date}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default WorkExperiencePage;
