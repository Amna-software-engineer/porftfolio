/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 10px #FACC15;', // Custom breakpoint at 1175px
      },
      colors:{
          heading: 'var(--heading)', /*lightYellow*/ 
          background1: ' var(--background1)',/*slate-950*/ 
          background2:'var(--background2)',/*slate-900*/ 
          para1: 'var(--para1)',/*gray-500*/ 
          para2: 'var(--para2)',/*gray-500*/ 
      }
    }, 
    },
  plugins: [],
}