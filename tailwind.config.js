/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        // Add your Google Font here
        title: ["Barlow Condensed"],
        footer: ["Zain"],
        carlist:["DM Sans"],
      },
      keyframes: {
        roll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        roll: "roll 15s linear infinite",
        rollLg: "roll 25s linear infinite",
      },
    },
  },
  plugins: [],
};
