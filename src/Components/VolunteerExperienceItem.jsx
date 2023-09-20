import React, { useState } from 'react';

const VolunteerExperienceItem = ({ title, content }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`border bg-white dark:border-neutral-600 dark:bg-neutral-800 ${collapsed ? 'collapsed' : ''}`}>
      <h2 className="mb-0">
        <button
          className="group relative flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition overflow-anchor-none hover:z-2 focus:z-3 focus:outline-none dark:bg-neutral-800 dark:text-white"
          type="button"
          onClick={toggleCollapse}
          aria-expanded={!collapsed}
          aria-controls={`collapse-${title}`}
        >
          {title}
          <span className={`rotate-180 ${collapsed ? '' : 'rotate-0'}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
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
        {content}
      </div>
    </div>
  );
};

export default VolunteerExperienceItem;
