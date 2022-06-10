module.exports = {
  darkMode: "class",
  content: ["./src/{pages,components,modules}/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin 0.5s linear infinite',
      }
    },
  },
  plugins: [],
};
