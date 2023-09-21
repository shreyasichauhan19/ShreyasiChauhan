import React, { useState } from 'react';

const VolunteerExperienceItem = ({ title, content }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`border border-grayscale-100 border-x-2 border-y-2 mb-4 rounded-lg  ${collapsed ? 'collapsed' : ''}`}>
      <h2 className="mb-0 " style={{ fontFamily: 'Quicksand', fontSize: '20px', fontWeight: 'bold' }}>
        <button
          className="group relative flex w-full items-center px-8 py-8 text-primary-500 transition overflow-anchor-none hover:z-2 focus:z-3 focus:outline-none dark:bg-neutral-800 dark:text-white"
          type="button"
          onClick={toggleCollapse}
          aria-expanded={!collapsed}
          aria-controls={`collapse-${title}`}
        >
          {title}
          <span className={`rotate-0 ${collapsed ? '' : 'rotate-180'}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              className="h-6 w-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </button>
      </h2>
      <div
        id={`collapse-${title}`}
        className={`px-5 py-4 ${collapsed ? 'hidden' : 'visible'}`}
        aria-labelledby={`heading-${title}`}
      >
        <p className="mb-4 text-grayscale-950" style={{ fontFamily: 'Quicksand', fontSize: '18px' }}>{content}</p>
      </div>
    </div>
  );
};

export default VolunteerExperienceItem;
