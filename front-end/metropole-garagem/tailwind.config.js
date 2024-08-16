// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': "url('/assets/background.jpg')",
      },
      colors: {
        'logo': "#b9dc18",
        'logo2': "#768e0c",
        'logo3': "#0c1404",
        'logo4': "#647404",
        'logo5': "#3c4b00",
        'logo6':"#d2e92c",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};
