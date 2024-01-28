/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        quantify: ['Quantify', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif']
      }
    }
  },
  plugins: []
}
