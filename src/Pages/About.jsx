import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import { memoji } from "../Constants/constants";
import { introduction } from "../Constants/constants";
import ImageSlider from "../Components/elements/ImageSlider";

const About = () => {

  return (
    <div id="about" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16 ml-[8%] mr-[8%] ">
        <div className="w-full">
          <SectionTitle title="ABOUT ME"/>
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row">
          <div className="w-full md:w-[50%] md:h-full flex items-center mt-10">
            <LazyMotion features={domAnimation} strict>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                style={{ fontFamily: "Poppins, sans-serif" }}
                className="text-grayscale-50 text-left flex flex-col gap-6"
              >
                <span className="text-primary-500" style={ 
                  {fontFamily: 'Quicksand',  fontSize: "18px", fontWeight: "600"} }>
                    {introduction.text[0]}</span>
                <span className="text-grayscale-400" style={ 
                  {fontFamily: 'Quicksand',  fontSize: "16px", fontWeight: "500"} }>
                    {introduction.text[1]}</span>
                <span className="text-primary-500" style={ 
                  {fontFamily: 'Quicksand',  fontSize: "18px", fontWeight: "600"} }>
                    {introduction.text[2]}</span>
             
                 </m.p>
            </LazyMotion>
          </div>
          <div className="w-full md:w-[50%] flex h-full items-center justify-center">
            <div className="w-[80%] lg:w-[50%] h-[300px] sm:h-[350px] flex justify-center 
            items-center">
              <ImageSlider images={memoji.image} />
            </div>
          </div>
        </div>
        <div className="w-full mt-[3%] text-left">
            <a
              href="https://www.notion.so/shreyasic/Resume-3b7a6149c32340f28e8cf4e5e1ab2f5b"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Recommended for security when using target="_blank"
            >
              <button
                className="bg-primary-400 text-white px-6 py-3 rounded-lg shadow-md 
                hover:bg-primary-500 transition duration-300"
                style={{ fontFamily: "Quicksand", color: "white" }}
              >
                View Resume
              </button>
            </a>
          <a
            href="https://calendly.com/chauhan-shreyasi/1-hour-meeting"
            target="_blank"
            rel="noopener noreferrer"
          >

          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
