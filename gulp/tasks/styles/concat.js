(function () {
  'use strict';

  const config = require('././../../gulp-configs.js');

  const gulp = require('gulp');

  const init = require('./../../gulp-init.js');

  const path = require('./../../gulp-paths.js');

  gulp.task('styles:concat', ['styles:stylus'], () => {
    config.break();
    return gulp.src(path.styles.input)
      .pipe(init.load.plumber((err) => { config.plumber(err); }))
      .pipe(init.load.debug(config.debug))
      .pipe(init.load.concatCss('./' + path.styles.name))
      .pipe(init.load.size(config.size))
      .pipe(init.load.plumber.stop())
      .pipe(gulp.dest(path.styles.output))
      .pipe(init.notify('Concatenated Stylesheet!'));
  });
})();
