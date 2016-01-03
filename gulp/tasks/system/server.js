(function () {
  'use strict';

  const config = require('./../../gulp-configs.js');

  const gulp = require('gulp');

  const init = require('./../../gulp-init.js');

  const path = require('./../../gulp-paths.js');

  gulp.task('server:run', ['build:clean'], () => {
    config.break();
    init.server.init(
      config.sync(path._root.output)
    );
  });
})();
