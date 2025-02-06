import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";

const SocialLinks = () => {
  return (
    <div className="w-full h-[100px] flex justify-center items-center gap-10 ">
      <a href="https://github.com/shreyasichauhan19?tab=repositories" target="_blank">
        <FontAwesomeIcon
          className="text-4xl text-primary-600 hover:text-primary-700 hover:scale-[1.1] 
          transition-all duration-75"
          icon={icons.faGithub}
        />
      </a>
      <a href="https://www.linkedin.com/in/shreyasi-chauhan/" target="_blank">
        <FontAwesomeIcon
          className="text-4xl text-primary-600 hover:text-primary-700 hover:scale-[1.1] 
          transition-all duration-75"
          icon={icons.faLinkedin}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
