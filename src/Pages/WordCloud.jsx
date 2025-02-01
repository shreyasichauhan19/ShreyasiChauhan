import React from 'react';
import SectionTitle from '../Components/SectionTitle';
import ProjectCards from '../Components/ProjectCards';
import { cloudData } from '../Constants/constants';


const WordCloud = () => {


  return (
    <div id="projects" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full xl:w-[70%] flex flex-col">
        <div className="mt-[15%]">
          <SectionTitle title="SKILLS NEW"/>
        </div>
        <div className="w-full flex flex-wrap justify-center">
          {cloudData.map((data, index) => (
            <div className="w-[40%] h-[auto] m-4" key={index}>
              <ProjectCards
                title={data.cloudItem}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordCloud;
