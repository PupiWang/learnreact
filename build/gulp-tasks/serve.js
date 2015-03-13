'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var argv = require('yargs').argv;

module.exports = function () {
  var baseDir = ['.tmp', 'app'];
  if (argv.production) baseDir = ['dist'];
  browserSync({
      notify: false,
      port: 9000,
      server: {
        baseDir: baseDir,
        routes: {
          '/bower_components': 'bower_components'
        }
      }
    });

    // watch for changes
    gulp.watch([
      'app/*.html',
      'app/scripts/**/*.js',
      'app/images/**/*',
      '.tmp/fonts/**/*'
    ]).on('change', reload);

    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('app/scripts/**/*.jsx', ['jsx']);
    gulp.watch('app/fonts/**/*', ['fonts']);
    gulp.watch('bower.json', ['wiredep', 'fonts']);
}
