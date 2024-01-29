/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#FFFFFF',
        primary: '#009D6B',
        secondary: '#212529'
      },
      fontFamily: {
        quantify: ['Quantify', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif']
      }
    }
  },
  plugins: []
}
