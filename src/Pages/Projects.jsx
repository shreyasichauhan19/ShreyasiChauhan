import React from 'react';
import SectionTitle from '../Components/SectionTitle';
import ProjectCards from '../Components/ProjectCards';

const Projects = () => {
  const projectData = [
    {
      title: 'Web Scraping Robot',
      imageSrc: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
      description: 'Hiiiiiiiiiiiiii',
      link: 'https://github.com/shreyasichauhan19/WebScrapingRobot',
    },
    {
      title: 'The Game of Amazons',
      imageSrc: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
      description: 'Hiiiiiiiiiiiiii',
      link: 'https://github.com/shreyasichauhan19/COSC322_Project',
    },
    {
      title: 'Vernon Community Calendar',
      imageSrc: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
      description: 'Hiiiiiiiiiiiiii',
      link: 'https://www.notion.so/shreyasic/Love-for-Vernon-Community-Calendar-UBC-Capstone-464fd99a7b3643388693616ecc5f5eef',
    },
    {
      title: 'Acronym Keyword Replacement',
      imageSrc: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
      description: 'Hiiiiiiiiiiiiii',
      link: 'https://github.com/ThatOth3rGuy/Cosc320',
    },
  ];

  return (
    <div id="projects" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-screen relative mt-60 flex flex-col items-center justify-center pb-6">
        <div className="w-80% h-[20%] mt-[1%] mb-[5%]">
          <SectionTitle title="TECHNICAL PROJECTS" subtitle="What I have done so far" />
        </div>
        <div className="w-[80%] flex flex-wrap justify-center">
          {projectData.map((project, index) => (
            <div className="w-[40%] h-[auto] m-4" key={index}>
              <ProjectCards
                title={project.title}
                imageSrc={project.imageSrc}
                description={project.description}
                link={project.link}
              />
            </div>
          ))}
        </div>
        <div className="absolute w-full h-full top-[100%] right-[-75%] sm:right-[-50%]">
        </div>
      </div>
    </div>
  );
};

export default Projects;
