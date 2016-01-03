(function () {
  'use strict';

  const config = require('./../../gulp-configs.js');

  const gulp = require('gulp');

  const init = require('./../../gulp-init.js');

  const path = require('./../../gulp-paths.js');

  gulp.task('build:clean', () => {
    config.break();
    gulp.src(path._root.output)
      .pipe(init.load.vinylPaths(init.load.del))
      .pipe(init.notify('Finished Clean!'));
  });
})();
