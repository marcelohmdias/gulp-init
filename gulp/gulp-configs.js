(function () {
  'use strict';

  exports.break = () => {
    console.log('\n  ♦ ---------- ♦  ---------- ♦ ---------- ♦  \n');
  };

  exports.debug = { title: '♦ Gulp-debug:' };

  exports.images = {
    interlaced: true
    , optimizationLevel: 5
    , progressive: true
  };

  exports.jade = {
    pretty: true
  };

  exports.loadingFile = {
    config: require('./../package.json')
    , pattern: '*'
    , scope: ['dependencies', 'devDependencies', 'peerDependencies']
    , replaceString: /^gulp(-|\.)/
    , camelize: true
    , lazy: true
    , rename: {}
    , renameFn: (module) => {
      var regex = /^gulp(-|\.)/;

      var rename = (name) => {
        if (module.match(regex)) {
          return name.replace(regex, '');
        }
        return name;
      };

      var camelize = (name) => {
        return name.replace(/-(\w)/g, (m, str) => {
          return str.toUpperCase();
        });
      };

      return camelize(rename(module));
    }
  };

  exports.message = (text) => {
    return {
      title: text
      , message: 'File:  <%= file.relative %> <%= options.extra %>' +
               '\nExecution Date:  <%= options.date %>'
      , onLast: true
      , wait: true
      , templateOptions: {
        date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      }
    };
  };

  exports.plumber = (err) => {
    return {
      errorHandler: (err) => {
        console.log(err);
        this.emit('end');
      }
    };
  };

  exports.prefixer = {
    browsers: ['last 3 versions',  'ie 8', '> 10%'],
    add: true,
    cascade: true
  };

  exports.size = {
    pretty: true
    , showFiles: true
    , title: '  File size:'
  };

  exports.sync = (root) => {
    return {
      browser: 'google-chrome'
      , port: 8080
      //, proxy: 'localhost:8080',
      , server: { baseDir: root }
      , tunnel: 'marcelohmdias'
      , ui: { port: 8081 }
    };
  };

  exports.tasks = {
    documents: ['documents:jade', 'documents:lint']
    , images: ['images:minify']
    , scripts: ['scripts:lint', 'scripts:minify']
    , styles: ['styles:stylus', 'styles:concat', 'styles:minify']
  };

})();
