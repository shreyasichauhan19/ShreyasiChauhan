import MarqueeCards from "../Components/MarqueeCards";
import SectionTitle from "../Components/SectionTitle";
import SkillsCards from "../Components/SkillsCards";

const Skills = () => {
  return (
    <div id="skills" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[100px] flex flex-col xl:w-[70%]">
        <div className="w-full mt-20 mb-20 ">
          <SectionTitle title="SKILLS" subtitle="WHAT I DO" />
        </div>
        <div className="xl:border-l-2 xl:border-r-2 xl:border-primary-800 h-full">
          <div className="relative">
            <div className="absolute top-[45px] absolute bottom-[45px] w-full h-[1px] bg-primary-800"></div>
            <MarqueeCards  >
              <SkillsCards />
            </MarqueeCards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
