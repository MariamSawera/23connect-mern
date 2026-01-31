import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  keyframes: {
  glow: {
    "0%,100%": {
      boxShadow: "0 0 0px rgba(99,102,241,0.4)",
    },
    "50%": {
      boxShadow: "0 0 12px rgba(99,102,241,0.7)",
    },
  },
},

  plugins: [daisyui],
  // daisyui: {
  //   themes: [ "forest"],
  // },
}