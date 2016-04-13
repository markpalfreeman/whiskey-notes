var config = require('hjs-webpack')

module.exports = config({
  in: 'src/index.js',
  out: 'public',
  clearBeforeBuild: true,
  html: function (data) {
    return {
      'index.html': data.defaultTemplate(),
      '200.html': data.defaultTemplate()
    }
  }
})
