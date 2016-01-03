(function () {
  'use strict';

  const src = {
    project: './project/'
    , dest: './app/'
  };

  module.exports = {
    _config: {
      js: './gulp/.jshintrc'
    }
    , _root: {
      input: src.project
      , output: src.dest
    }
    , documents: {
      files: src.project + '**/*.jade'
      , folder: src.project + '**/*'
      , input: src.dest + '**/*.html'
      , output: src.dest
    }
    , images: {
      files: []
      ,inject: ['wallpapper.jpg']
      , input: src.project + 'img/**/*'
      , output: src.dest + 'img/'
    }
    , scripts: {
      files: src.project + 'js/**/*.js'
      , folder: src.project + 'js/**/*'
      , inject: ['js/app.min.js']
      , input: src.dest + 'js/**/*.js'
      , output: src.dest + 'js/'
    }
    , styles: {
      files: src.project + 'css/**/*.styl'
      , folder: src.project + 'css/**/*'
      , inject: ['css/styles.css']
      , input: src.dest + 'css/stylus/**/*'
      , name: 'styles.css'
      , output: src.dest + 'css/'
    }
  };
})();
