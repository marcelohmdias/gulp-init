(function () {
  'use strict';

  const gulp = require('gulp');

  const init = require('./../../gulp-init.js');

  const path = require('./../../gulp-paths.js');

  const reload = init.load.browserSync.reload;

  const task = require('./../../gulp-tasks.js');

  gulp.task('workflow:watch', () => {
    gulp.watch(path.documents.files, ['build:documents']).on('change', reload);
    gulp.watch(path.images.input, ['build:images']).on('change', reload);
    gulp.watch(path.scripts.files, ['build:scripts']).on('change', reload);
    gulp.watch(path.styles.files, ['build:styles']).on('change', reload);
  });
})();
