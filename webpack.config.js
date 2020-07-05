const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.less'],
    alias: {
      CSSGlobal: path.join(__dirname, 'src/styles'),
      '@assets': path.join(__dirname, 'src/assets'),
      '@components': path.join(__dirname, 'src/components')
    }
  },
  devServer: {
    historyApiFallback: true
  },
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'index_bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].css',
      chunkFilename: '[id].hash.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.module.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[local]--[hash:base64:8]',
              camelCase: 'only'
            }
          },
          {
            loader: 'less-loader',
            options: {
              prependData: '@import \'CSSGlobal/variables.less\';@import \'CSSGlobal/fonts.less\';'
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              prependData: '@import \'CSSGlobal/variables.less\';'
            }
          }
        ],
        exclude: [/\.module.less$/, /variables.less$/, /fonts.less$/]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  }
};
