const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          // 使用 MiniCssExtractPlugin.loader 以提取 CSS 到单独文件
          MiniCssExtractPlugin.loader,
          'css-loader', // 解析 CSS 文件
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html', // 使用之前生成的静态 HTML
      inject: 'body', // 将 JavaScript 注入到 body 的末尾
      minify: {
        collapseWhitespace: false, // 不折叠空白，保留格式
        removeComments: true,       // 移除注释
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: false,            // 不最小化 JavaScript
        minifyCSS: false,           // 不最小化 CSS
        minifyURLs: false,          // 不最小化 URL
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // 输出的 CSS 文件名
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
  },
};
