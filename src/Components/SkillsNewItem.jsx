// ProjectCards.js
import React from 'react';

const SkillsNewItem = ({item}) => {
  return (
  <div className="w-full flex items-center flex-col">
    <div className="h-auto w-auto flex justify-center items-center bg-primary-800 rounded-lg border p-1 object-contain text-center text-grayscale-400 text-sm p-2 hover:bg-primary-400 ">
    {item}
    </div>
</div>
  );
};

export default SkillsNewItem;
