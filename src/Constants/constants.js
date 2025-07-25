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
  protocol,
  cssIcon,
  jsIcon,
  shopify,
  networking,
  debugging,
  threading,
  reactIcon,
  jenkins,
  awsIcon,
  javaIcon,
  google,
  gitIcon,
  tailwind,
  githubIcon,
  stripe,
  docker,
  clientserver,
  terminal,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  visualstudio,
  figmaIcon,
  acronym,
  chatbot,
  gameOfAmazons,
  portfolio,
  rpa,
  vernonCalendar,
  avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  shopify,
  tailwind,
  jsIcon,
  jenkins,
  reactIcon,
  threading,
  docker,
  awsIcon,
  google,
  networking,
  visualstudio,
  protocol,
  stripe,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  terminal,
  clientserver,
  debugging,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  acronym,
  chatbot,
  gameOfAmazons,
  portfolio,
  rpa,
  vernonCalendar,
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
    "Just a CS grad working on creating her own unique career path...", "Hi, I am Shreyasi! A computer science graduate from The University of British Columbia, currently, working at Definity as a Business Systems Analyst. I have worn many hats in the past - backend software engineer, hackathon coach and 3x hackathon organizer being some of my favorite experiences.  At the moment, I am working on my side projects, hobbies and exploring my interests! ⚡️",
  ],
};

export const navLinks = [

  {
    id: 'workexperience',
    title: 'Work Experience',
  },
  {
    id: 'skillsnew',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'Java',
    icon: javaIcon,
    description: 'Java',
  },
  {
    id: 'JavaScript',
    icon: jsIcon,
    description: 'JavaScript',
  },
  {
    id: 'Python',
    icon: pyIcon,
    description: 'Python',
  },
  {
    id: 'SQL',
    icon: psqlIcon,
    description: 'SQL',
  },
  {
    id: 'HTML',
    icon: htmlIcon,
    description: 'HTML',
  },
  {
    id: 'CSS',
    icon: cssIcon,
    description: 'CSS',
  },
  {
    id: 'Node',
    icon: nodeIcon,
    description: 'Node',
  },
  {
    id: 'React',
    icon: reactIcon,
    description: 'React',
  },
  {
    id: 'Vite',
    icon: viteIcon,
    description: 'Vite',
  },
  {
    id: 'Tailwind',
    icon: tailwind,
    description: 'Tailwind',
  },
  {
    id: 'RPA',
    icon: javaIcon,
    description: 'RPA',
  },
  {
    id: 'Git',
    icon: gitIcon,
    description: 'Git',
  },
  {
    id: 'GitHub',
    icon: githubIcon,
    description: 'GitHub',
  },
  {
    id: 'Jenkins',
    icon: jenkins,
    description: 'Jenkins',
  },
  {
    id: 'CLI',
    icon: terminal,
    description: 'CLI',
  },
  {
    id: 'Visual Studio',
    icon: visualstudio,
    description: 'Visual Studio',
  },
  {
    id: 'CI/CD',
    icon: javaIcon,
    description: 'CI/CD',
  },
  {
    id: 'DBeaver',
    icon: javaIcon,
    description: 'DBeaver',
  },
  {
    id: 'Docker',
    icon: docker,
    description: 'Docker',
  },
  {
    id: 'AWS',
    icon: awsIcon,
    description: 'AWS',
  },
  {
    id: 'Wireshark',
    icon: javaIcon,
    description: 'Wireshark',
  },
  {
    id: 'Networking Protocols',
    icon: protocol,
    description: 'Networking Protocols',
  },
  {
    id: 'Shopify Dev',
    icon: shopify,
    description: 'Shopify Dev',
  },
  {
    id: 'Stripe',
    icon: stripe,
    description: 'Stripe',
  },
  {
    id: 'GoogleAPIs',
    icon: google,
    description: 'GoogleAPI',
  },
  {
    id: 'Nexus',
    icon: javaIcon,
    description: 'Nexus',
  },
  {
    id: 'Data Structures',
    icon: javaIcon,
    description: 'Data Structures',
  },
  {
    id: 'Algorithms',
    icon: javaIcon,
    description: 'Algorithms',
  },
  {
    id: 'OOP',
    icon: javaIcon,
    description: 'OOP',
  },
  {
    id: 'Agile Development',
    icon: javaIcon,
    description: 'Agile Development',
  }, 
  {
    id: 'Networking',
    icon: networking,
    description: 'Networking',
  }, 
  {
    id: 'Project Management',
    icon: javaIcon,
    description: 'Project Management',
  }, 
  {
    id: 'Debugging',
    icon: debugging,
    description: 'Debugging',
  }, 
  {
    id: 'Threading',
    icon: threading,
    description: 'Threading',
  },
  {
    id: 'Client/Server Architecture',
    icon: clientserver,
    description: 'Client/Server Architecture',
  }, 
];



const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  memoji,
  skills,
  markerSvg,
  icons,
};
