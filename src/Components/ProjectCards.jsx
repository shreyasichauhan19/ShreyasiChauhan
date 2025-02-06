// ProjectCards.js
import React from 'react';

const ProjectCards = ({ title, link }) => {
  return (
    
    <a 
    href={link} className="block p-2 h-[100px] rounded-lg bg-white 
    shadow-[0px_0px_3px_3px_rgba(230,230,230)] hover:transform hover:scale-105 
    duration-500 ease-in-out dark:bg-neutral-300 flex items-center justify-center "
    target="_blank" 
    rel="noopener noreferrer"
    >
    <div>
      <div className="text-grayscale-400 
      hover:text-primary-400 dark:text-neutral-50 
      flex items-center justify-center" 
      style={{  fontFamily: 'Poppins', fontSize: '18px' }}>
          {title}
      </div>
    </div>
    </a>
  );
};

export default ProjectCards;
