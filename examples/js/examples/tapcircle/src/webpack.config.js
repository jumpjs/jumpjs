module.exports = {
  context: '/webpack/src',
  devtool: 'eval-source-map',
  entry: {
    app: [
      './index.js'
    ]
  },
  output: {
    path: '/webpack/dist',
    filename: '[name].js'
  },
  watch: true
};
