/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      mediumPurple: "#7CA2F4",
      dark30: "#121214",
      dark20: "#F3F7FF",
      dark10: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
