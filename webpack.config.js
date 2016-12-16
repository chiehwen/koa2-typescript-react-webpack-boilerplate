//webpack.config.js
const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: './src/index.tsx',
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { exclude: /node_modules/ },
      // All files with a '.ts' extension will be handled
      { test: /\.tsx?$/, use: [{ loader: 'ts-loader' }]},
      { test: /\.json$/, use: [{ loader: 'json-loader' }]}
    ]
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    // Add '.js' and 'ts' as resolvable extensions.
    extensions: [ '*','.js', '.ts', '.tsx' ]
  },
  externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
