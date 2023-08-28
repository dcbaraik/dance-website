const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './views/index.pug', // Update the path to your Pug entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
    ],
  },
};
