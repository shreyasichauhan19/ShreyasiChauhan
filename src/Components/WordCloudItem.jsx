// ProjectCards.js
import React from 'react';

const WordCloudItem = ({ cloudItem }) => {
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-grayscale-400 dark:text-neutral-50" style={{ fontFamily: 'Quicksand', fontSize: '20px'}}>
          {title}
        </h5>
      </div>
    </div>
  );
};

export default WordCloudItem;
