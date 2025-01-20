/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-color": "#6E00FF",
        "primary-color-darker": "#612DD1",
        "background-color": "#EFF6FC",
        "shadow-color": "rgba(121, 197, 239, 0.38)",
      },
    },
  },
  plugins: [],
};
