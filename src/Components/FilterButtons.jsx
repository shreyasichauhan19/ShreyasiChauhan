import React from 'react';

const FilterButtons = ({ data, selectedIndex, onSelect }) => {
  return (
    <div className="w-full mb-10 mt-7 md:w-1/3 flex flex-col gap-4 px-4 md:ml-10">
      {data.map((item, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`text-left px-5 py-4 rounded-lg shadow-md text-sm md:text-base transform transition-transform duration-300 ease-in-out
            ${
              selectedIndex === index
                ? 'bg-blue-600 text-primary-500 scale-115'
                : 'bg-neutral-50 text-primary-600 dark:bg-neutral-700 dark:text-white hover:scale-105 hover:bg-blue-500 hover:text-white'
            }`}
          style={{
            fontFamily: 'Poppins, sans-serif',
            border: selectedIndex === index ? 'none' : '1px solid #cbd5e0',
          }}
        >
          <div className="font-semibold text-base md:text-lg">{item.jobTitle}</div>
          <div className="text-xs md:text-sm opacity-80">{item.company}</div>
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
