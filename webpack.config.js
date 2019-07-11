const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');          // Allows for base HTML template
const CleanWebpackPlugin = require('clean-webpack-plugin');        // Cleans output dir every build
const MiniCssExtractPlugin = require('mini-css-extract-plugin');   // Extracts CSS into separate files.
                                                                   // Creates a CSS file per JS file which contains CSS
const outputDirectory = 'dist';

// function recursiveIssuer(m) {
//   if (m.issuer) {
//     return recursiveIssuer(m.issuer);
//   } else if (m.name) {
//     return m.name;
//   } else {
//     return false;
//   }
// }

module.exports = {
  entry: ['./src/client/index.jsx'],    // Entry point is "main" by default
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: '[name].bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                // publicPath is the relative path of the resource to the context
                // e.g. for ./css/admin/main.css the publicPath will be ../../
                // while for ./css/main.css the publicPath will be ../
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
              modules: true
            },
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif|woff|woff2|eot|ttf)$/,
        loader: "file-loader?name=/assets/[name].[ext]"
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  }
};