var through = require('through')
var marked = require('marked')

module.exports = function(options) {
  if (options) {
    marked.setOptions(options)
  }

  var markdown = ''
  var write = function(data) {
    markdown += data.toString()
  }
  var end = function() {
    marked(markdown, {}, function(error, markdown) {
      if (error) {
        this.emit('error', error)
        return
      }
      this.queue(markdown) 
      this.queue(null)
    }.bind(this))
  }

  return through(write, end)
}
