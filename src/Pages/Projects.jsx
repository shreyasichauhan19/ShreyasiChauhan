import React from 'react';
import SectionTitle from '../Components/SectionTitle';
import ProjectCards from '../Components/ProjectCards';
import vernonCalendar from '../assets/projects/vernonCalendar.png';
import { gameOfAmazons } from '../assets';
import { acronym } from '../assets';
import { chatbot } from '../assets';


const Projects = () => {
  const projectData = [
    {
      title: 'Vernon Community Calendar',
      imageSrc: vernonCalendar,
      description: 'A custom Shopify calendar app that lets you add, delete and view events. ',
      link: 'https://www.notion.so/shreyasic/Love-for-Vernon-Community-Calendar-UBC-Capstone-464fd99a7b3643388693616ecc5f5eef',
    },
    {
      title: 'Shreyasi Chauhan Portfolio Website',
      imageSrc: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
      description: 'This website that you are using right now :) ',
      link: 'https://github.com/shreyasichauhan19/ShreyasiChauhan',
    },
    {
      title: 'Customer Service Chatbot',
      imageSrc: chatbot,
      description: 'A customer service chat-bot created with Vanilla Javascript that simply answers user queries.',
      link: 'https://github.com/shreyasichauhan19/310-chat-bot',
    },
    {
      title: 'Web Scraping Robot',
      imageSrc: 'https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg',
      description: 'Program automatically opens a browser tab, performs some web scraping & calculation, then displays it.',
      link: 'https://github.com/shreyasichauhan19/WebScrapingRobot',
    },
    {
      title: 'The Game of Amazons',
      imageSrc: gameOfAmazons,
      description: 'Game of Amazons developed in Java using Maven. We used alpha-beta pruning using min-max algorithms.',
      link: 'https://github.com/shreyasichauhan19/COSC322_Project',
    },
    {
      title: 'Acronym Keyword Replacement',
      imageSrc: acronym,
      description: 'Keyword replacement of acronyms with their full forms',
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
