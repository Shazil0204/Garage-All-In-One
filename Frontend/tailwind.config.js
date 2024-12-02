/** @type {import('tailwindcss').Config} */

import fluid, { extract, screens, fontSize } from "fluid-tailwind";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    extract, // Keep extract here
  ],
  theme: {
    screens, // Fluid Tailwind’s default screens in rem
    fontSize, // Fluid Tailwind’s default font sizes in rem
    extend: {
      screens: {
        xs: "20rem", // Custom screen size (example)
      },
      colors: {
        primary: "#008080",
        secondary: "#00A0A0",
      },
    },
  },
  plugins: [fluid],
};
