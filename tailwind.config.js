/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add your Google Font here
        title: ['Barlow Condensed'],
      },
    },
  },
  plugins: [],
}

