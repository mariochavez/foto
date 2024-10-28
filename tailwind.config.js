module.exports = {
  content: ["./src/**/*.{liquid,md,html,yml}", "./frontend/javascript/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif;",
        marcellus: "'Marcellus', serif;"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
