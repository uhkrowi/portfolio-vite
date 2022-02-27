module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cgreen: "#3b6837",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
