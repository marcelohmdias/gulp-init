(function () {
  'use strict';

  const config = require('././../../gulp-configs.js');

  const gulp = require('gulp');

  const init = require('./../../gulp-init.js');

  const path = require('./../../gulp-paths.js');

  gulp.task('styles:minify', ['styles:concat'], () => {
    config.break();
    return gulp.src(path.styles.output + path.styles.name)
      .pipe(init.load.plumber((err) => { config.plumber(err); }))
      .pipe(init.load.debug(config.debug))
      .pipe(init.load.sourcemaps.init())
      .pipe(init.load.minifyCss())
      .pipe(init.load.rename( {suffix: '.min'}))
      .pipe(init.load.sourcemaps.write('.'))
      .pipe(init.load.size(config.size))
      .pipe(init.load.plumber.stop())
      .pipe(gulp.dest(path.styles.output))
      .pipe(init.notify('Minified Stylesheet!'));
  });
})();
