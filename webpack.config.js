require('babel-core/register')

var React = require('react')
var ReactDOMServer = require('react-dom/server')
var Index = require('./Index').default
// const NotesList = require('./src/NotesList').default

var config = require('hjs-webpack')

module.exports = config({
  in: 'index.js',
  out: 'public',
  clearBeforeBuild: true,
  html: function (data) {
    // const appHtml = ReactDOMServer.renderToString(React.createElement(Index))
    // const notesListHtml = ReactDOMServer.renderToString(React.createElement(NotesList))

    return {
      '200.html': data.defaultTemplate(),
      'index.html': data.defaultTemplate()
    }
  }
})

/* ****************
 * Testing HJS Webpack for HTML pre-render
 * ****************

const path = require('path')

module.exports = {
  devtool: 'eval',
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'app.js',
    publicPath: '/public'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    progress: false,
    chunks: false
  },
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loaders: ['eslint'],
      exclude: /node_modules/
    }],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  }
}
*/
