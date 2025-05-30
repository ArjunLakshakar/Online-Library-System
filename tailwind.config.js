// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // Adjust this based on your file structure
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // Extra small devices (phones)
        '3xl': '1600px'   // Extra large
      }
    },
  },
  plugins: [],
}
