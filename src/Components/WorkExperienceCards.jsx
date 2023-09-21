// WorkExperienceCards.jsx
import React from 'react';

const WorkExperienceCards = ({ jobTitle, company, description, date }) => {
  return (
    <li className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="flex-start md:flex">
        <div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            {/* SVG path here */}
          </svg>
        </div>
        <div className="mb-10 ml-2 mr-2 block max-w-xl rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
          <div className="mb-4 flex justify-between">
            <a
              className="text-2xl text-primary-700 transition duration-150 ease-in-out hover:text-info-600 pr-10 focus:text-info-600 active:text-info-700"
            >
              {jobTitle}
            </a>
            <a
              href="#!"
              className="text-xl text-primary-700 text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
            >
              {company}
            </a>
          </div>
          <p className="mb-6 text-grayscale-300"  style={{
                fontFamily: "Quicksand",
                fontSize: "14px", 
                fontWeight: "400",
              }}>{description}</p>
          <a
            className="text-xl text-primary-600 text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
          >
            {date}
          </a>
        </div>
      </div>
    </li>
  );
};

export default WorkExperienceCards;
