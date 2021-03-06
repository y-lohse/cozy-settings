'use strict'

const { extractor } = require('./webpack.vars')

module.exports = {
  resolve: {
    extensions: ['.styl']
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        exclude: /(services\.styl)/,
        loader: extractor.extract('style', [
          'css-loader?importLoaders=1&modules&localIdentName=[local]--[hash:base64:5]',
          'postcss',
          'stylus'
        ])
      },
      {
        test: /services\.styl$/,
        include: /(services\.styl)/,
        loader: extractor.extract('style', [
          'css-loader?importLoaders=1',
          'postcss',
          'stylus'
        ])
      }
    ]
  },
  plugins: [
    extractor
  ],
  stylus: {
    use: [ require('cozy-ui/stylus')() ]
  }
}
