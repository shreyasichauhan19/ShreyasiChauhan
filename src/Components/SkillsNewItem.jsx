// ProjectCards.js
import React from 'react';

const SkillsNewItem = ({item}) => {
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="skill-tiles">
        <p  className="font-medium leading-tight text-grayscale-400 dark:text-neutral-50" style={{ fontFamily: 'Quicksand', fontSize: '15px'}}>{item}</p>
      </div>
    </div>
  );
};

export default SkillsNewItem;
