var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['babel-polyfill', __dirname + '/src/js']
  },
  output: {
    path: __dirname + '/compiled',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },{
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        }
      }
    ]
  },

  devtool: 'source-map',

  plugins: [
    //new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
  
};
