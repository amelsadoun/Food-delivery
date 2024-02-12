/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-blue': '#252B42',
      'subtle-white': '#F6F6F6',
      'orange':'#FA4A0C',
      'gray': '#737373',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    darkTheme: "light",
   },
}

