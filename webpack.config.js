var config = require('hjs-webpack')

module.exports = config({
  in: 'src/index.js',
  out: 'public',
  clearBeforeBuild: true
})
