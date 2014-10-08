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

### Excluding files

You can exclude particular files from being wrapped by supplying an `exclude`
function in the config:

```javascript
amdwrapPreprocessor: {
  exclude: function(file){
    // return true to exclude
  }
}
```

The function is passed the karma `file` object.

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
