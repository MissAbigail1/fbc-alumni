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
        'fbc-green-deep': '#0f3822',
        'fbc-green-light': '#f0f7f3',
        'fbc-gold': '#c9960c',
        'fbc-gold-light': '#fef9ec',
        'fbc-burgundy': '#72263d',
        'fbc-burgundy-dark': '#53182a',
        'fbc-burgundy-light': '#fcf4f6',
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Garamond', 'serif'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.08)',
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}