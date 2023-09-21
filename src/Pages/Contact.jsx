import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";

import SocialLinks from "../Components/SocialLinks";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full overflow-hidden-web flex flex-col items-center"
    >
  
      <div className="w-full flex flex-col">
        <SocialLinks />
        <div className="bg-primary-800 flex justify-center pb-4 text-primary-600 text-xl">
          <span>
            Made by <em>Shreyasi Chauhan</em>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
