module.exports = {
  upload: {
    config: {
      provider: require.resolve("../providers/netlify-blobs"),
      sizeLimit: 10 * 1024 * 1024,
      breakpoints: { large: 1600, medium: 900, small: 400 },
    },
  },
};
