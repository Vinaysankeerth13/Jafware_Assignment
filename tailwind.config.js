/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {colors: {
      orange: '#F04A07', // Custom orange color
      offwhite: '#F3F3F3',  // Custom white color
      black: '#1E1A18',  // Custom black color
    },},
  },
  plugins: [],
};

