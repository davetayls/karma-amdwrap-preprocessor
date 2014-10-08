
var amdwrap = require('amd-wrap');

function createAmdwrapPreprocessor(args, config, logger, helper){
  var log = logger.create('preprocessor.coffee');

  function wrapFile(file){
    var wrap = true;
    if (config.exclude && config.exclude(file) === true){
      wrap = false;
    }
    return wrap;
  }

  return function(content, file, done){
    if (wrapFile(file)){
      done(null, amdwrap(content));
    } else {
      log.debug('Excluded', file);
      done(null, content);
    }
  }

}

createAmdwrapPreprocessor.$inject = ['args', 'config.amdwrapPreprocessor', 'logger', 'helper'];

// PUBLISH DI MODULE
module.exports = {
  'preprocessor:amdwrap': ['factory', createAmdwrapPreprocessor]
};
