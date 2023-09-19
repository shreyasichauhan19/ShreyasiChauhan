import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  calculator,
  memoryGame,
  avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",
    "Hello there, I'm so happy you are here! (:",
    "Hello there, I'm so happy you are here! (:",

  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Game of Amazons",
    description: 'game of amazons ......',
    image: memoryGame,
    source_code_link: 'https://github.com/shreyasichauhan19/COSC322_Project',
  },
  {
    name: 'Web Scraping Robot',
    description: 'The purpose of this software robot is to find key information about important scientists and display it to the user. ',
    image: pawsitivePrototype,
    source_code_link: 'https://github.com/shreyasichauhan19/WebScrapingRobot',
    demo_link: 'google.com',
  },

  {
    name: 'Web Scraping Robot',
    description: 'The purpose of this software robot is to find key information about important scientists and display it to the user. ',
    image: pawsitivePrototype,
    source_code_link: 'https://github.com/shreyasichauhan19/WebScrapingRobot',
    demo_link: 'google.com',
  },
  
];

const nonTechProjects = [
  {
    name: "Game of Amazons",
    description: 'game of amazons ......',
    image: calculator,
    source_code_link: 'https://github.com/shreyasichauhan19/COSC322_Project',
  },
  {
    name: 'Web Scraping Robot',
    description: 'The purpose of this software robot is to find key information about important scientists and display it to the user. ',
    image: calculator,
    source_code_link: 'https://github.com/shreyasichauhan19/WebScrapingRobot',
    demo_link: 'google.com',
  },
  {
    name: 'Web Scraping Robot',
    description: 'The purpose of this software robot is to find key information about important scientists and display it to the user. ',
    image: calculator,
    source_code_link: 'https://github.com/shreyasichauhan19/WebScrapingRobot',
    demo_link: 'google.com',
  },
  
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    icon: htmlIcon,
    description: 'olaaaaaaaa',
  },
  {
    id: 'css',
    icon: cssIcon,
    description: 'olaaaaaaaa',
  },
  {
    id: 'javascript',
    icon: jsIcon,
    description: 'olaaaaaaaa',
  },
  {
    id: 'react',
    icon: reactIcon,
    description: 'olaaaaaaaa',
  },
  {
    id: 'java',
    icon: javaIcon,
  },
  {
    id: 'aws',
    icon: awsIcon,
  },
  {
    id: 'figma',
    icon: figmaIcon,
  },
  {
    id: 'git',
    icon: gitIcon,
  },
  {
    id: 'github',
    icon: githubIcon,
  },
  {
    id: 'psql',
    icon: psqlIcon,
  },
  {
    id: 'vite',
    icon: viteIcon,
  },
  {
    id: 'py',
    icon: pyIcon,
  },
  {
    id: 'node',
    icon: nodeIcon,
  },
  {
    id: 'neo',
    icon: neoIcon,
  },
  {
    id: 'raspi',
    icon: raspIcon,
  },
  {
    id: 'eslint',
    icon: eslintIcon,
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  nonTechProjects,
  markerSvg,
  icons,
};
