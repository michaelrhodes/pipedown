var stream = require('stream')
var util = require('util')
var marked = require('marked')

var pipedown = function(options) {
  if (!(this instanceof pipedown)) {
    return new pipedown(options)
  }
  stream.Transform.call(this)
  if (options) {
    marked.setOptions(options)
  }
}

util.inherits(pipedown, stream.Transform)

pipedown.prototype._transform = function(data, encoding, done) {
  var thy = this
  marked(data.toString(), {}, function(error, html) {
    if (error) {
      thy.emit('error', error)
      return
    }
    thy.push(html) 
    done()
  })
}

module.exports = pipedown
