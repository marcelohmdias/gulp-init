(function () {
  'use strict';

  const config = require('././../../gulp-configs.js');

  const gulp = require('gulp');

  const init = require('./../../gulp-init.js');

  const path = require('./../../gulp-paths.js');

  gulp.task('images:minify', () => {
    config.break();
    return gulp.src(path.images.input)
      .pipe(init.load.changed(path.images.output))
      .pipe(init.load.imagemin(config.images))
      .pipe(init.load.size(config.size))
      .pipe(gulp.dest(path.images.output))
      .pipe(init.notify('Minified Images!'));
  });
})();
