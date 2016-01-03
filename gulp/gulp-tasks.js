(function () {
  'use strict';

  const config = require('./gulp-configs.js');

  const gulp = require('gulp');

  exports.clean = require('./tasks/system/clean.js');

  exports.documents = {
    jade: require('./tasks/documents/jade.js')
    , lint: require('./tasks/documents/lint.js')
  };

  exports.images = require('./tasks/images/images.js');

  exports.server = require('./tasks/system/server.js');

  exports.scripts = {
    lint: require('./tasks/scripts/lint.js')
    , minify: require('./tasks/scripts/uglify.js')
    , test: require('./tasks/scripts/test.js')
  };

  exports.styles = {
    concat: require('./tasks/styles/concat.js')
    , minify: require('./tasks/styles/minify.js')
    , sass: require('./tasks/styles/sass.js')
    , stylus: require('./tasks/styles/stylus.js')
  };

  exports.watch = require('./tasks/system/watch.js');

  gulp.task('build:documents', config.tasks.documents);

  gulp.task('build:images', config.tasks.images);

  gulp.task('build:scripts', config.tasks.scripts);

  gulp.task('build:styles', config.tasks.styles);

})();
