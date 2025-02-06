// ProjectCards.js
import React from 'react';

const ProjectCards = ({ title, description, link }) => {
  return (
    <div className="block h-[100px] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">

      <a href={link}>
      <div >
        <h5 className="font-medium text-grayscale-400 dark:text-neutral-50 flex items-center justify-center" style={{ fontFamily: 'Quicksand', fontSize: '20px'}}>
          {title}
        </h5>
        <p>{description}</p>
      </div>
      </a>
    </div>
  );
};

export default ProjectCards;
