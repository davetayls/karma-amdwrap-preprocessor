
var amdwrap = require('amd-wrap');

function createAmdwrapPreprocessor(args, config, logger, helper){
  var log = logger.create('preprocessor.coffee');

  return function(content, file, done){
    done(null, amdwrap(content));
  }

}

createAmdwrapPreprocessor.$inject = ['args', 'config.amdwrapPreprocessor', 'logger', 'helper'];

// PUBLISH DI MODULE
module.exports = {
  'preprocessor:amdwrap': ['factory', createAmdwrapPreprocessor]
};
