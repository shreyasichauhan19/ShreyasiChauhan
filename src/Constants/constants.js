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
  vernonCalendar,
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
    icon: javaIcon,
    description: 'JavaScript',
  },
  {
    id: 'Python',
    icon: javaIcon,
    description: 'Python',
  },
  {
    id: 'SQL',
    icon: javaIcon,
    description: 'SQL',
  },
  {
    id: 'HTML',
    icon: javaIcon,
    description: 'HTML',
  },
  {
    id: 'CSS',
    icon: javaIcon,
    description: 'CSS',
  },
  {
    id: 'Node',
    icon: javaIcon,
    description: 'Node',
  },
  {
    id: 'React',
    icon: javaIcon,
    description: 'React',
  },
  {
    id: 'Vite',
    icon: javaIcon,
    description: 'Vite',
  },
  {
    id: 'Tailwind',
    icon: javaIcon,
    description: 'Tailwind',
  },
  {
    id: 'RPA',
    icon: javaIcon,
    description: 'RPA',
  },
  {
    id: 'Git',
    icon: javaIcon,
    description: 'Git',
  },
  {
    id: 'Jenkins',
    icon: javaIcon,
    description: 'Jenkins',
  },
  {
    id: 'Gradle',
    icon: javaIcon,
    description: 'Gradle',
  },
  {
    id: 'CLI',
    icon: javaIcon,
    description: 'CLI',
  },
  {
    id: 'Visual Studio',
    icon: javaIcon,
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
    icon: javaIcon,
    description: 'Docker',
  },
  {
    id: 'Chef',
    icon: javaIcon,
    description: 'Chef',
  },
  {
    id: 'AWS',
    icon: javaIcon,
    description: 'AWS',
  },
  {
    id: 'Wireshark',
    icon: javaIcon,
    description: 'Wireshark',
  },
  {
    id: 'Networking Protocols',
    icon: javaIcon,
    description: 'Networking Protocols',
  },
  {
    id: 'Shopify Dev',
    icon: javaIcon,
    description: 'Shopify Dev',
  },
  {
    id: 'Stripe',
    icon: javaIcon,
    description: 'Stripe',
  },
  {
    id: 'GoogleAPIs',
    icon: javaIcon,
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
    icon: javaIcon,
    description: 'Networking',
  }, 
  {
    id: 'Project Management',
    icon: javaIcon,
    description: 'Project Management',
  }, 
  {
    id: 'Debugging',
    icon: javaIcon,
    description: 'Debugging',
  }, 
  {
    id: 'Threading',
    icon: javaIcon,
    description: 'Threading',
  },
  {
    id: 'Client/Server Architecture',
    icon: javaIcon,
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
