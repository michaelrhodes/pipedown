var run = require('tape').test
var fs = require('fs')
var pipedown = require('../')

run('no options', function(test) {
  var expected = '<h1>Pipe down, Chachi!</h1>\n'
  fs.createReadStream(__dirname + '/no-options.md')
    .pipe(pipedown())
    .on('data', function(result) {
      test.equal(result.toString(), expected)
      test.end()
    }) 
})

run('yes options', function(test) {
  var expected = '<p>~~i &lt;3 tildes winton~~</p>\n'
  fs.createReadStream(__dirname + '/yes-options.md')
    .pipe(pipedown({ gfm: false }))
    .on('data', function(result) {
      test.equal(result.toString(), expected)
      test.end()
    })
})
