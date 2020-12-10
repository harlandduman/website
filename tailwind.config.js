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
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              color: theme("colors.gray.900"),
              a: {
                color: theme("colors.light-blue.700"),
                "&:hover": {
                  color: theme("colors.light-blue.800"),
                },
              },
              p: {
                lineHeight: theme("lineHeight.relaxed"),
              },
              h2: {
                fontSize: theme("fontSize.2xl")[0],
                lineHeight: theme("fontSize.2xl")[1].lineHeight,
                fontWeight: theme("fontWeight.semibold"),
                marginBottom: theme("spacing.4"),
                marginTop: theme("spacing.8"),
              },
              h3: {
                fontSize: theme("fontSize.xl")[0],
                lineHeight: theme("fontSize.xl")[1].lineHeight,
                fontWeight: theme("fontWeight.semibold"),
              },
            },
          },
        };
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
