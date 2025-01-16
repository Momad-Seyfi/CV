module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        fs: false,
      };
      webpackConfig.ignoreWarnings = [
        (warning) =>
          warning.message.includes(
            "Failed to parse source map from '/node_modules/@mediapipe/"
          ),
      ];
      return webpackConfig;
    },
  },
};
