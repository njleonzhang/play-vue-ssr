const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.conf')

const isProd = process.env.NODE_ENV === 'production'

const config = merge(base, {
  entry: {
    app: './src/entry-client.js'
  },
  output: {
    filename: 'client-bundle.js'
  },
  mode: isProd ? 'production' : 'development',
  plugins: [
    // strip dev-only code in Vue source
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
  ]
})

module.exports = config
