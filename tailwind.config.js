module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // Enable dark mode via class
  theme: {
    extend: {
      colors: {
        darkbg: {
          DEFAULT: '#181824',
          light: '#23243a',
        },
        darkaccent: {
          indigo: '#6366f1',
          pink: '#f472b6',
          purple: '#c4b5fd',
        },
        darktext: {
          DEFAULT: '#e0e7ef',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
