/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        activitygen: "url('../projects/activitygen.png')",
        jsquiz: "url('../projects/jsquiz.png')",
        weatherapp: "url('../projects/weatherapp.png')",
      },
    },
    screens: {
      xxl: { max: "1450px" },

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
