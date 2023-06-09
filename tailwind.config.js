/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif", "ui-system"],
    },
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#CDCDCD",
      },
    },
  },
  plugins: [],
};
