module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #38b2ac, #4299e1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
