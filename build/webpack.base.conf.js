const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
}
