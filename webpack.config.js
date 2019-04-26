const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: "development",

  entry: "./src/index.tsx",

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist')
  },

  devtool: "source-map",

  devServer: {
    contentBase: './dist'
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      { 
        enforce: "pre", 
        test: /\.js$/, 
        loader: "source-map-loader" 
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './index.html'
    })
  ]
}