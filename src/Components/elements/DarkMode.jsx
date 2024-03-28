import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const DarkMode = () => {
  const toggleHighContrast = () => {
    document.body.classList.toggle('high-contrast');
  };

  useEffect(() => {
    // You can add additional functionality here, like checking if dark mode is enabled and updating the button accordingly
  }, []);

  return (
    <button onClick={toggleHighContrast} className="dark-mode-btn">
      <FontAwesomeIcon icon={faMoon} className="moon-icon" />
      &nbsp;
      Dark Mode
    </button>
  );
};

export default DarkMode;
