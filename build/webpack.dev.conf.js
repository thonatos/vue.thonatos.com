var path = require('path')
var webpack = require('webpack')
var config = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// eval-source-map is faster for development
config.devtool = 'eval-source-map'

// add hot-reload related code to entry chunks
var polyfill = 'eventsource-polyfill'
var hotClient = 'webpack-hot-middleware/client?noInfo=true&reload=true'
Object.keys(config.entry).forEach(function (name, i) {
  var extras = i === 0 ? [polyfill, hotClient] : [hotClient]
  config.entry[name] = extras.concat(config.entry[name])
})

// necessary for the html plugin to work properly
// when serving the html from in-memory

var htmls = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
]

for (_entry in config.entry) {
  htmls.push(new HtmlWebpackPlugin({
    title: config.site.getName(_entry),
    filename: _entry + '.html',
    template: path.join('src', _entry, 'page.html'),
    chunks: [_entry]
  }))
}

config.output.publicPath = '/'
config.plugins = (config.plugins || []).concat(htmls)

module.exports = config
