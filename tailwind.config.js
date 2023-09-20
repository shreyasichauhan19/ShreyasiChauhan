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
        400: '#A0DB9E', //cute green
        500: '#F483B4', //cute pink
        600: '#BDADFF', //light purple
        700: '#6bc1db',  //lightblue
        800: '#fffcb3' //yellow
      },
      grayscale: {
        50: '#ffffff',
        100: '#efefef',
        200: '#FDFDFF',
        300: '#454444',
        950: '#16161b',
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
