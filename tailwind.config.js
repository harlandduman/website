const colors = require("tailwindcss/colors");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: [
    "./layouts/**/*.js",
    "./pages/**/*.js",
    "./pages/**/*.mdx",
    "./components/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": colors.lightBlue,
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
