const withMdxEnhanced = require("next-mdx-enhanced");

module.exports = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
})({
  redirects: async () => {
    return [
      {
        source: "/stuff-i-like",
        destination: "/stuff-i-like/books",
        permanent: false,
      },
    ];
  },
});
