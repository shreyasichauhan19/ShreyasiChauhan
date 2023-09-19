// ProjectCards.js
import React from 'react';

const ProjectCards = ({ title, imageSrc, link }) => {
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <a href={link}>
        <img
          className="rounded-t-lg"
          src={imageSrc}
          alt=""
        />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        {/* Rest of the card content */}
      </div>
    </div>
  );
};

export default ProjectCards;
