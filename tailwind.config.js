/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'shortNews': '38rem',
        'longNews': '64rem',
      }
    },
  },
  plugins: [],
}

