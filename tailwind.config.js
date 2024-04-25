/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#8f1013",
        secondary: "#08569a",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
