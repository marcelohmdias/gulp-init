(function () {
  'use strict';

  const config = require('././../../gulp-configs.js');

  const gulp = require('gulp');

  const init = require('./../../gulp-init.js');

  const path = require('./../../gulp-paths.js');

  gulp.task('documents:lint', ['documents:jade'], () => {
    config.break();
    return gulp.src(path.documents.input)
      .pipe(init.load.changed(path.images.output))
      .pipe(init.load.htmlhint())
      .pipe(init.load.htmlhint.reporter())
      .pipe(init.load.htmlhint.failReporter())
      .pipe(init.load.size(config.size))
      .pipe(gulp.dest(path.documents.output))
      .pipe(init.notify('Checked Documents!'));
  });
})();
