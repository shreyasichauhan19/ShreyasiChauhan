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
          className="card w-[160px] h-[120px] flex flex-col items-center  bg-primary-400 rounded-xl border-4 border-primary-900 cursor-pointer"
        >
          <div className="w-full  flex items-center gap-0.2 p-0.1 flex-col">
            <img
              className="h-[50px] flex justify-center items-center w-[50px]  bg-primary-600 rounded-[50%] p-1 object-contain"
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
              className="text-center text-primary-900 rounded-xl text-sm p-3"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "19px", 
                fontWeight: "200",
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