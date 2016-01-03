(function () {
  'use strict';

  const config = require('././../../gulp-configs.js');

  const gulp = require('gulp');

  const init = require('./../../gulp-init.js');

  const path = require('./../../gulp-paths.js');

  gulp.task('styles:sass', () => {
    config.break();
    return gulp.src(path.styles.files)
      .pipe(init.load.plumber((err) => { config.plumber(err); }))
      .pipe(init.load.debug(config.debug))
      .pipe(init.load.changed(path.styles.output))
      .pipe(init.load.sass())
      .pipe(init.load.autoprefixer(config.prefixer))
      .pipe(init.load.csslint())
      .pipe(init.load.csslint.reporter())
      .pipe(init.load.csslint.reporter('fail'))
      .pipe(init.load.size(config.size))
      .pipe(init.load.plumber.stop())
      .pipe(gulp.dest(path.styles.output))
      .pipe(init.notify('Preprocessed Stylesheet!'));
  });
})();
