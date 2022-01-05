module.exports = {
  content: ["./src/**/*.{liquid,md,html}", "./frontend/javascript/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif;"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
