module.exports = {
  webpack: {
    configure: {
      output: {
        publicPath: "./",
      },
    },
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
