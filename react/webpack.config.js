const path = require('path');
//importing node js path module 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //This property defines where the application starts
  entry:'./src/index.js',

  //This property defines the file path and the file name which will be used for deploying the bundled file
  output:{
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
    chunkFilename: '[id].[chunkhash].js'
  },

  //Setup loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      { test: /\.css$/, use: 'css-loader' },
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },
  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],

  devServer: {
    static: './dist',
    hot: true,
    open: true,
    port: 3000
  },
  mode: 'development'
}