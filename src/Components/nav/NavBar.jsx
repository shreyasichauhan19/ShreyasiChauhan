import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles.js";
import { navLinks } from "../../Constants/constants";
import { menu, close } from "../../assets";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true); // Navbar visible initially
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowNavbar(true); // Show navbar when back at the top
      } else if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false); // Hide when scrolling down
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`
        ${styles.paddingX} w-full flex  items-center py-5 fixed top-0 z-20 bg-primary 
        transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex"></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 text-primary-400">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="text-secondary hover:text-white text-[18px] font-medium 
              cursor-pointer"
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            className="w-[28px] h-[28px] cursor-pointer"
            onClick={() => setShowNavbar(!showNavbar)}
            src={showNavbar ? close : menu}
            alt="menu"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
