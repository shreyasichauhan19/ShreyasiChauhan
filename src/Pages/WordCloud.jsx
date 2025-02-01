// WordCloud.jsx
import React, { useState } from "react";
import SectionTitle from '../Components/SectionTitle';
import { motion } from "framer-motion";

const words = ["Skill", "Skill", "Skill", "Skill", "Skill", "Skill", "Skill", "Skill", "Skill", "Skill"];

const getRandomPosition = () => ({
  x: Math.random() * 200 - 100,
  y: Math.random() * 200 - 100
});

const WordCloud = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div id="wordcloud" className="w-full flex overflow-hidden-web justify-center ">
      <div className="w-full xl:w-[70%] ml-[6%] mr-[6%] flex flex-col items-center">
        <div className="w-full mt-[15%]">
          <SectionTitle title="SKILLS"  />
        </div>
        <div className="relative w-96 h-96 flex items-center justify-center rounded-full bg-blue-100 shadow-lg">
          {words.map((word, index) => (
            <motion.div
              key={index}
              initial={getRandomPosition()}
              animate={{ scale: hovered === index ? 1.5 : 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="absolute flex items-center justify-center rounded-full bg-blue-300 px-4 py-2 shadow-md cursor-pointer text-white"
            >
              {word}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordCloud;
