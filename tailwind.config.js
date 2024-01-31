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
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      }
    }
  },
  plugins: []
}
