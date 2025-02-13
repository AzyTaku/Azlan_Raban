/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgcolor1: "#060512",
        bgGradient1: "#282178",
        bgGradient2: "#060512",
        txcolor1: "#282178",
      },
      fontFamily: {
        kodemono: ['"Kode Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
