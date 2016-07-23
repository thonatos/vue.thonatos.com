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
config.output.publicPath = '/'
config.plugins = (config.plugins || []).concat([
  // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  // https://github.com/ampedandwired/html-webpack-plugin
  new HtmlWebpackPlugin({
    title: config.site.getName(),
    filename: 'about.html',
    template: 'src/about/page.html',
    chunks: ['about']    
  }),
  new HtmlWebpackPlugin({
    title: config.site.getName('FM'),
    filename: 'fm.html',
    template: 'src/fm/page.html',
    chunks: ['fm']    
  }),
  new HtmlWebpackPlugin({
    title: config.site.getName('Blog'),
    filename: 'blog.html',
    template: 'src/blog/page.html',
    chunks: ['blog']    
  })    
])

module.exports = config
