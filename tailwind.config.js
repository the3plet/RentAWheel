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
        carHeading:["Overpass"],
        icon:["Material Symbols Outlined"]
      },
      keyframes: {
        roll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        roll: "roll 15s linear infinite",
        rollLg: "roll 28s linear infinite",
      },
    },
  },
  plugins: [],
};
