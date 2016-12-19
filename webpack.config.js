//webpack.config.js
const webpack = require('webpack');
const path = require('path');

module.exports = {
  // This will be our app's entry point (webpack will look for it in the 'src' directory due to the modulesDirectory setting below).
  entry: {
    app: ['./src/index.tsx']
  },
  target: 'node',
  // Output the bundled JS to dist/bundle.js
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { exclude: /node_modules/ },
      // .ts(x) files should first pass through the Typescript loader, and then through babel
      { test: /\.tsx?$/, use: [{ loader: 'ts-loader' }]},
      { test: /\.json$/, use: [{ loader: 'json-loader' }]}
    ]
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    // // Look for modules in .ts(x) files first, then .js(x)
    extensions: [ '*', '.ts', '.tsx','.js', '.jsx' ],
    // Add 'src' to our modules, as all our app code will live in there, so Webpack should look in there for modules.
    modules: ['./src', '/node_modules/']
  },
  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
    }
};
