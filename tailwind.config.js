/** @type {import('tailwindcss').Config}*/
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      yellow: '#e9c46a',
      lightYellow: '#F9E5A1',
      orange: '#f4a261',
      darkOrange: '#e76f51',
      green: '#2a9d8f',
      darkGreen: '#264653',
    },
    fontFamily: {
      caveat: 'Caveat',
    },
  },
};
