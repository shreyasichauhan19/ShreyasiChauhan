import { m, LazyMotion, domAnimation } from "framer-motion";
import HeroText from "../Components/HeroText";

const Hero = () => {
  return (
    <div>
    <div id="hero" className="w-full flex justify-center overflow-hidden-web relative">
    <LazyMotion features={domAnimation} strict>
      <m.div
        id="hero"
        className="relative w-full flex justify-center items-center min-h-[800px]"
      >
        <HeroText />
   
      </m.div>
    </LazyMotion>
    </div>

<div className="relative w-full flex justify-center mb-[5%] items-center gap-4">
  <div>
  <a
    href="https://www.notion.so/shreyasic/Resume-3b7a6149c32340f28e8cf4e5e1ab2f5b"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      className="bg-primary-400 text-white px-6 py-3 rounded-lg shadow-md 
      hover:bg-primary-700 transition duration-300"
      style={{ fontFamily: "Quicksand" }}
    >
      Resume
    </button>
  </a>
  </div>
  <div>
  <a
    href="https://github.com/shreyasichauhan19"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      className="bg-primary-400 text-white px-6 py-3 rounded-lg shadow-md 
      hover:bg-primary-700 transition duration-300"
      style={{ fontFamily: "Quicksand" }}
    >
    Github
    </button>
  </a>
  </div>
</div>


</div>

  );
};

export default Hero;