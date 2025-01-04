/** @type {import('tailwindcss').Config} */
export default {
  content: [],content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        neumorphism:
          "10px 10px 20px rgba(0, 0, 0, 0.7), -10px -10px 20px rgba(255, 255, 255, 0.1)",
        "neumorphism-inner":
          "inset 4px 4px 8px rgba(0, 0, 0, 0.6), inset -4px -4px 8px rgba(255, 255, 255, 0.1)",
      },
      colors: {
        "english-violet": "#3e2c41",
      },
    },
  },
  plugins: [],
};
