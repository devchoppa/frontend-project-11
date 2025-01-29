const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'dist/index.html',
    }),
  ],
  ignoreWarnings: [
    {
      module: /module2\.js\?[34]/, // A RegExp
    },
    {
      module: /[13]/,
      message: /homepage/,
    },
    /warning from compiler/,
    (warning) => true,
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer'),
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};
