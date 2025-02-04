import { m, LazyMotion, domAnimation } from "framer-motion";
import { skills } from "../Constants/constants";

const SkillsCards = () => {
  return (
    <div className="flex">
    <LazyMotion features={domAnimation} strict>

      {skills.map((skill, index) => (
        <m.div
          initial={{ scale: 0.8 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
          key={index}
          className="card w-[180px] h-[140px] flex flex-col items-center bg-primary-800 rounded-xl border-2 border-grayscale-300 cursor-pointer"
        >
          <div className="w-full flex items-center gap-0.2 p-2 flex-col">
            <img
              className="h-[60px] flex justify-center items-center w-[60px]  bg-primary-800 rounded-[50%] p-1 object-contain"
              src={skill.icon}
              alt={skill.title}
            />
            <span
              className="text-xl"
              style={{
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {skill.title}
            </span>
            <span
              className="text-center text-grayscale-300 rounded-xl text-sm p-4"
              style={{
                fontFamily: "Quicksand",
                fontSize: "22px", 
                fontWeight: "400",
              }}
            >
              {skill.description}
            </span>
          </div>
        </m.div>
      ))}
    </LazyMotion>
    </div>
  );
};

export default SkillsCards;