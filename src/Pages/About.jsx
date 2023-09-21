import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import { memoji } from "../Constants/constants";
import { introduction } from "../Constants/constants";
import ImageSlider from "../Components/elements/ImageSlider";

const About = () => {

  const handleResumeDownload = () => {
    const resumeFile = '../assets/docs/ShreyasiChauhanResume.pdf';
    window.open(resumeFile, '_blank');
  };

  return (
    <div id="about" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="ABOUT ME" subtitle="Introduction" />
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
                <span className="text-primary-500" style={ {fontFamily: 'Quicksand',  fontSize: "18px", fontWeight: "600"} }>{introduction.text[0]}</span>
                <span className="text-grayscale-400" style={ {fontFamily: 'Quicksand',  fontSize: "16px", fontWeight: "400"} }>{introduction.text[1]}</span>

             
                 </m.p>
            </LazyMotion>
          </div>
          <div className="w-full md:w-[50%] flex h-full items-center justify-center">
            <div className="w-[80%] lg:w-[50%] h-[300px] sm:h-[350px] flex justify-center items-center">
              <ImageSlider images={memoji.image} />
            </div>
          </div>
        </div>
        <div className="w-full mt-[8%] text-left">
          <button
            onClick={handleResumeDownload}
            className="bg-primary-400 text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary-500 transition duration-300"
            style={{ fontFamily: "Quicksand", color: "white" }}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
