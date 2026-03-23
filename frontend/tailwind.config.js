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
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 12px rgba(0,0,0,0.08)',
        'card-hover': '0 4px 20px rgba(0,0,0,0.12)',
      }
    },
  },
  plugins: [],
}