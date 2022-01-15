module.exports = {
  content: ["./src/**/*.{liquid,md,html,yml}", "./frontend/javascript/**/*.js"],
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
