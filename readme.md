# pipedown
pipedown is a transform stream wrapper for [marked](https://github.com/chjj/marked).

[![Build status](https://travis-ci.org/michaelrhodes/pipedown.png?branch=master)](https://travis-ci.org/michaelrhodes/pipedown)

## Install
```
npm install pipedown
```

### Example
``` js
var pipedown = require('pipedown')({
  // options: https://github.com/chjj/marked#usage
})

process.stdin
  .pipe(pipedown)
  .pipe(process.stdout)
```

### License
[MIT](http://opensource.org/licenses/MIT)
