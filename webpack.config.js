var config = require('hjs-webpack')

module.exports = config({
  in: 'index.js',
  out: 'public',
  clearBeforeBuild: true
})
