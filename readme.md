# pipedown
pipedown is a transform stream wrapper around the [marked](https://github.com/chjj/marked) Markdown parser/compiler. It lets you to pipe in arbitrary Markdown and read out the generated HTML.

**current version:** 0.0.3

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
