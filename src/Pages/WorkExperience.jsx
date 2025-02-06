// WorkExperiencePage.jsx
import React from 'react';
import SectionTitle from '../Components/SectionTitle';
import WorkExperienceCards from '../Components/WorkExperienceCards';

const WorkExperiencePage = () => {
  const workExperienceData = [
    {
      jobTitle: 'Technichal Business Analyst',
      company: 'Definity',
      description: " - Collaborate with the Project Manager and the team to develop and maintain a prioritized Product backlog of User Stories/Requirements, and develop the Release plan. Elicit, analyze, specify and communicate functional and non-functional business, system and implementation requirements. Plan and conduct acceptance reviews with business sponsors and delivery team to confirm delivered functionality. Help estimate delivery work necessary to realize requirements through development lifecycle. Participate in client project meetings. Identify opportunities for business or process improvement and makes associated recommendations.", // Add your description here
      date: 'February 2024 - Present',
    },
    {
      jobTitle: 'Web & Digital Media Coordinator',
      company: 'The University of British Columbia',
      description: " - Collaborate with the Faculties of Arts, Sciences, and Social Sciences, collectively representing over half of UBC's student population. Lead the creation and execution of various web projects, working on project plans, information architecture, site maps, wireframes, visual design, page layout, and quality assurance testing. In conjunction with staff, faculty, and executives, contribute to content strategy, develop new websites, and enhance the reputation of these faculties, their departments, and programs. Additionally, build, implement, and maintain web content, conduct iterative audits, identify gaps, and develop content strategies, including scoping, timelines, and workflows. Perform a variety of project related activities, including analysis or preparation of documentation and presentations.", // Add your description here
      date: 'November 2023 - February 2024',
    },
    {
      jobTitle: 'Hackathon Coach',
      company: 'Major League Hacking',
      description: " - Mentored and supported 25+ hackathons around the world. Conducted regular technical workshops on topics like - Github, Data Visualization, and Building a full-stack application. Worked with 3000+ hackers in less than 7 months. Judged 700+ technical hackathon projects. Successfully supported organizers of 5 hackathons to eliminate budgetary, logistical, and planning constraints. Providing expertise to help organize a seamless event. Acting as a link between MLH, organizers, attendees, and sponsors and maintaining clear communication with all parties throughout the process.", // Add your description here
      date: 'August 2022 - November 2023',
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
    <div id="workexperience" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full h-[full] xl:w-[70%] flex flex-col">
        <div className="w-full mt-[10%]">
          <SectionTitle title="WORK EXPERIENCE"/>
        </div>
        <ol>
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
