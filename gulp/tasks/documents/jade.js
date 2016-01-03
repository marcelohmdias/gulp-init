(function () {
  'use strict';

  const config = require('././../../gulp-configs.js');

  const gulp = require('gulp');

  const init = require('./../../gulp-init.js');

  const path = require('./../../gulp-paths.js');

  gulp.task('documents:jade', () => {
    config.break();
    return gulp.src(path.documents.files)
      .pipe(init.load.plumber((err) => { config.plumber(err); }))
      .pipe(init.load.debug(config.debug))
      .pipe(init.load.changed(path.documents.output))
      .pipe(init.load.jade(config.jade))
      .pipe(init.load.size(config.size))
      .pipe(gulp.dest(path.documents.output))
      .pipe(init.notify('Preprocessed Documents!'));
  });
})();
