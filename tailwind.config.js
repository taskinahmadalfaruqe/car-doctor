/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        sm: '10px',
        lg: '1rem',
        xl: '2rem',
        '2xl': '3rem',
      },
    },
    
    extend: {
      backgroundImage: {
        'background-image': "url('../Image/bg.jpg')",
        'bg-image-dark': "url('../Image/bgtwo.jpg')",
        'common-bg': "linear-gradient(to right, #fa5252, #dd2476)",
        'common-bg-hover': "linear-gradient(to left, #fa5252, #dd2476)",
      },

      colors: {
        primaryColor: '#FF3811',
        darkColor: '#111111',
        whiteColor: '#fff',
        darkMood: "#151515",
        lightDarkBG: "#2b2c28",
      }
    },
  },
  plugins: [require("daisyui")],
}

