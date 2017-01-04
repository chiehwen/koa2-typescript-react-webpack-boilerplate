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
      { exclude: path.resolve(__dirname, '/node_modules/') },
      { include: path.resolve(__dirname, "src") },
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, use: [{ loader: 'ts-loader' }]},
      { test: /\.json$/, use: [{ loader: 'json-loader' }]}
    ]
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    // Look for modules in .ts(x) files first, then .js(x)
    extensions: [ '*', '.ts', '.tsx','.js', '.jsx' ],
    // Add 'src' to our modules, as all our app code will live in there, so Webpack should look in there for modules.
    modules: ['./src', '/node_modules/']
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
    }
};
