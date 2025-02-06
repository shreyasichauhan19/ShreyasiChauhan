import React from 'react';
import SectionTitle from '../Components/SectionTitle';
import ProjectCards from '../Components/ProjectCards';




const Projects = () => {
  const projectData = [
    {
      title: 'Portfolio Website',
      link: 'https://github.com/shreyasichauhan19/ShreyasiChauhan',
    },
    {
      title: 'Vernon Community Calendar',
      link: 'https://www.notion.so/shreyasic/Love-for-Vernon-Community-Calendar-UBC-Capstone-464fd99a7b3643388693616ecc5f5eef',
    },

    {
      title: 'Customer Service Chatbot',
      link: 'https://github.com/shreyasichauhan19/310-chat-bot',
    },
    {
      title: 'The Game of Amazons',
      link: 'https://github.com/shreyasichauhan19/COSC322_Project',
    },
    {
      title: 'Web Scraping Robot',
      link: 'https://github.com/shreyasichauhan19/WebScrapingRobot',
    },
    {
      title: 'Acronym Keyword Replacement',
      link: 'https://github.com/ThatOth3rGuy/Cosc320',
    },
  ];

  return (
    <div id="projects" className="w-full h-full overflow-hidden-web flex justify-center">
      <div className="w-full h-full xl:w-[70%] flex flex-col">
        <div className="mt-[15%]">
          <SectionTitle title="TECHNICAL PROJECTS"/>
        </div>
        <div className="w-full flex flex-wrap items-center justify-center">
          {projectData.map((project, index) => (
            <div className="w-[15%] m-2 items-center justify-center" key={index}>
              <ProjectCards
                title={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
