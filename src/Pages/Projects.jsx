import React from 'react';
import SectionTitle from '../Components/SectionTitle';
import ProjectCards from '../Components/ProjectCards';
import vernonCalendar from '../assets/projects/vernonCalendar.png';
import { gameOfAmazons } from '../assets';
import { acronym } from '../assets';
import { chatbot } from '../assets';
import { portfolio } from '../assets';
import { rpa } from '../assets';



const Projects = () => {
  const projectData = [
    {
      title: 'Shreyasi Chauhan Portfolio Website',
      imageSrc: portfolio,
      description: 'This website that you are using right now :) Made with React, TailwindCSS and Vite.',
      link: 'https://github.com/shreyasichauhan19/ShreyasiChauhan',
    },
    {
      title: 'Vernon Community Calendar',
      imageSrc: vernonCalendar,
      description: 'A custom Shopify calendar app that lets you add, delete and view events. It offers both - an admin and user views. Stripe handles payments, AWS for database, Express for backend, Vite used to build the React frontend.',
      link: 'https://www.notion.so/shreyasic/Love-for-Vernon-Community-Calendar-UBC-Capstone-464fd99a7b3643388693616ecc5f5eef',
    },

    {
      title: 'Customer Service Chatbot',
      imageSrc: chatbot,
      description: 'A customer service chat-bot created with Vanilla Javascript that simply answers user queries.',
      link: 'https://github.com/shreyasichauhan19/310-chat-bot',
    },
    {
      title: 'The Game of Amazons',
      imageSrc: gameOfAmazons,
      description: 'Game of Amazons developed in Java using Maven. We used alpha-beta pruning using min-max algorithms.',
      link: 'https://github.com/shreyasichauhan19/COSC322_Project',
    },
    {
      title: 'Web Scraping Robot',
      imageSrc: rpa,
      description: 'Program automatically opens a browser tab, performs some web scraping & calculation, then displays it.',
      link: 'https://github.com/shreyasichauhan19/WebScrapingRobot',
    },
    {
      title: 'Acronym Keyword Replacement',
      imageSrc: acronym,
      description: 'Keyword replacement of acronyms with their full forms. Coded in python and is currently able to work with around 3000 files and 2.8 million data entries in total.',
      link: 'https://github.com/ThatOth3rGuy/Cosc320',
    },
  ];

  return (
    <div id="projects" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-screen relative mt-60 flex flex-col items-center justify-center pb-6">
        <div className="w-80% h-[20%] mt-[1%] mb-[5%]">
          <SectionTitle title="TECHNICAL PROJECTS" subtitle="What I have done so far" />
        </div>
        <div className="w-[90%] flex flex-wrap justify-center">
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
      </div>
    </div>
  );
};

export default Projects;
