/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fbc-green': '#1a5c38',
        'fbc-green-dark': '#154d2f',
        'fbc-green-light': '#f0f7f3',
        'fbc-gold': '#c9960c',
        'fbc-gold-light': '#fef9ec',
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Garamond', 'serif'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.1)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.15)',
      }
    },
  },
  plugins: [],
}