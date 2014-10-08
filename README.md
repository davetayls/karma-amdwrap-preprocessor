karma-amdwrap-preprocessor
==========================

Karma preprocessor running [amd-wrap](https://www.npmjs.org/package/amd-wrap) on
the code.

## Installation

    $ npm install karma-amdwrap-preprocessor --save-dev

## Configuration

```javascript
// karma.conf.js
module.exports = function(config){

  config.set({
    files: [
      'cjs/**/*.js'
    ],
    preprocessors: {
      'cjs/**/*.js': ['amdwrap']
    }
  });
};
```

## Example

With the following source:

```javascript
var foo = require('foo');
exports.bar = foo('bar');
```

The browser will be served:

```javascript
define(function(require, exports, module){var foo = require('foo');
exports.bar = foo('bar');
});
```
