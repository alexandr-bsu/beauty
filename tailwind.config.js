/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      "almost-black": "#3A2D32",
      "grey":"#565656",
      "dark-blue": "#221E42",
      "almost-white": "#FFFBFA",
      "accent": "#FF7A00",
      "cream": "#FEF3E2",
      "rose": "#FE9986",
      "rose-80": "rgba(240, 163, 149, 0.8)",
      "almost-white-70": "rgba(255, 255, 255, 0.7)",
    },

    fontFamily:{
      serif: ["Playfair Display", "serif"],
      sans: ['Poppins', 'sans-serif'],
      "dm-sans": ["DM Sans", 'sans-serif']
    },

    extend: {
      screens: {
        "xl": "1440px",
        "2lg": "1200px",
      },
      backgroundImage: {
        'header-image': "url('/assets/img/header-image.png')",
        
      },
    },
  },
  plugins: [],
};
