module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: ["cupcake", "cmyk"],
  },
  plugins: [require("daisyui")],
};
