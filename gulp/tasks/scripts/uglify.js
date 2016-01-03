(function () {
  'use strict';

  const config = require('././../../gulp-configs.js');

  const gulp = require('gulp');

  const init = require('./../../gulp-init.js');

  const path = require('./../../gulp-paths.js');

  gulp.task('scripts:minify', ['scripts:lint'], () => {
    config.break();
    return gulp.src(path.scripts.input)
      .pipe(init.load.plumber((err) => { config.plumber(err); }))
      .pipe(init.load.debug(config.debug))
      .pipe(init.load.sourcemaps.init())
      .pipe(init.load.uglify())
      .pipe(init.load.rename({suffix: '.min'}))
      .pipe(init.load.sourcemaps.write('.'))
      .pipe(init.load.size(config.size))
      .pipe(gulp.dest(path.scripts.output))
      .pipe(init.notify('Minified Scripts!'));
  });
})();
