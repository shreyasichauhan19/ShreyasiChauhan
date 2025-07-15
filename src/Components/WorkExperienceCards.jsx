// WorkExperienceCards.jsx
import React from 'react';

const WorkExperienceCards = ({ jobTitle, company, description, date }) => {
  return (
    <div className="hover:transform hover:scale-105 transition-transform duration-300 
    ease-in-out">
      <div className="flex-start md:flex">
        <div className="ml-[13px] h-[25px] w-[25px] items-center justify-center 
        rounded-full ">
        </div>
        <div className=" mr-[8%] block max-w-xl max-h-xl rounded-lg bg-neutral-50 p-6 
        shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
          <div className="mb-4 flex justify-between">
            <a
              className="text-2xl text-primary-700 transition duration-150 ease-in-out 
              hover:text-info-600 pr-10 focus:text-info-600 active:text-info-700"
            >
              {jobTitle}
            </a>
            <a
              href="#!"
              className="text-xl text-primary-700 text-info transition duration-150 
              ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
            >
              {company}
            </a>
          </div>
          <p className="mb-6 text-grayscale-50"  style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "14px", 
                fontWeight: "400",
              }}>{description}</p>
          <a
            className="text-xl text-primary-600 text-info transition duration-150 ease-in-out 
            hover:text-info-600 focus:text-info-600 active:text-info-700"
          >
            {date}
          </a>
        </div>
      </div>
    </div> 
  );
};

export default WorkExperienceCards;
