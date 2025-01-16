const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file name
    clean: true, // Clean 'dist' folder before building
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpile JS/JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Uses Babel to transpile JS/JSX
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Support modern JS and React
          },
        },
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'], // Inject CSS into DOM and process imports
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/i, // Process image files
        type: 'asset/resource',
      },
      {
        test: /\.html$/, // Handle HTML files
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use your HTML template
      filename: 'index.html', // Output file
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve JS and JSX extensions automatically
  },
  devtool: 'source-map',
  devServer: {
    static: resolve(__dirname, 'dist'), // Serve files from the 'dist' folder
    compress: true, // Enable gzip compression
    port: 3000, // Server port
    open: true, // Open browser on server start
    hot: true, // Enable Hot Module Replacement
  },
};
