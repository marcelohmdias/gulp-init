(function () {
  'use strict';

  const config = require('././../../gulp-configs.js');

  const gulp = require('gulp');

  const init = require('./../../gulp-init.js');

  const path = require('./../../gulp-paths.js');

  gulp.task('scripts:lint', () => {
    config.break();
    return gulp.src(path.scripts.files)
      .pipe(init.load.plumber((err) => { config.plumber(err); }))
      .pipe(init.load.debug(config.debug))
      .pipe(init.load.changed(path.scripts.output))
      .pipe(init.load.jshint(path._config.js))
      .pipe(init.load.jshint.reporter('jshint-stylish'))
      .pipe(init.load.jshint.reporter('fail'))
      .pipe(gulp.dest(path.scripts.output))
      .pipe(init.load.size(config.size))
      .pipe(init.load.plumber.stop())
      .pipe(gulp.dest(path.scripts.output))
      .pipe(init.notify('Check Scripts!'));
  });
})();
