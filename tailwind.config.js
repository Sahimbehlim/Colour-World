/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        nav: "0px 1px 2px 0px #0000000D",
        hero: "0px 4px 6px 0px #0000001A",
        serviceBox: "0px 4px 6px 0px #0000001A; 0px 2px 4px 0px #0000001A",
        about: "0px 10px 15px 0px #0000001A; 0px 4px 6px 0px #0000001A",
      },
    },
  },
  plugins: [],
};
