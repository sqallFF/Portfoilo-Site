/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'appColor': "#cfe1fc",
        'TextColor': '#143d7d'
      }
    },
  },
  plugins: [],
}
