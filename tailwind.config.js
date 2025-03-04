import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem #29c26f',
      },
    },
    colors: {
      primary: {
        100: '#3c544c', //dark green
        400: '#44543c', //green
        500: '#d497ac', //cute pink
        600: '#BDADFF', //light purple
        700: '#54403c',  //blue-purple
        800: '#9979a9', //yellow
        900: '#ff6700' //orange
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
