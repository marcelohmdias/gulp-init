(function () {
  'use strict';

  const config = require('./gulp-configs.js');

  const module = require('gulp-load-plugins')(config.loadingFile);

  exports.load = module;

  exports.server =  module.browserSync.create();

  exports.notify = (text) => {
    return module.notify(
      config.message(text)
    );
  };
})();
