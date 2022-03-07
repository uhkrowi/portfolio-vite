module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cgreen: "#3b6837",
        ctextbase: "#08102b",
      },
      boxShadow: {
        custom1: "0 8px 25px 0 rgba(0, 0, 0, 0.05)",
        custom2: "0 8px 25px 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
