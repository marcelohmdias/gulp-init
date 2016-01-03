(function () {
  'use strict';

  /*
  *
  *
  */

  const gulp = require('gulp');

  const task = require('./gulp/gulp-tasks.js');

  gulp.task('default', ['server:run', 'workflow:watch']);

})();
