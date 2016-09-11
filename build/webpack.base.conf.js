var path = require('path')

module.exports = {
  entry: {
    about: './src/about/entry.js',
    pano: './src/pano/entry.js',
    life: './src/life/entry.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel!eslint',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff)\??.*$/,
        loader: 'url-loader?name=[path][name].[ext]',
        //loader: 'url',
        query: {
          limit: 50000,
          name: '[name].[ext]?[hash:7]'
        }
      },
      {
      test: /\.(mp4)$/,
      loader: 'file'
    }
    ]
  },
  site: {
    getName: function (title) {
      name = 'Thonatos.Yang';
      return title || '' ? title + ' - ' + name : name;
    }
  },
  vue: {
    loaders: {
      js: 'babel!eslint'
    }
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
}
