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
  theme: {},
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
