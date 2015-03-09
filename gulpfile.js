/*global -$ */
'use strict';
// generated on 2015-03-09 using generator-gulp-webapp 0.3.0
var gulp = require('gulp');

gulp.task('styles', require('./build/gulp-tasks/styles'));

gulp.task('jsx', require('./build/gulp-tasks/jsx'));

gulp.task('jshint', require('./build/gulp-tasks/jshint'));

gulp.task('html', ['styles', 'jsx'], require('./build/gulp-tasks/html'));

gulp.task('images', require('./build/gulp-tasks/images'));

gulp.task('fonts', require('./build/gulp-tasks/fonts'));

gulp.task('extras', require('./build/gulp-tasks/extras'));

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['styles', 'fonts'], require('./build/gulp-tasks/serve'));

// inject bower components
gulp.task('wiredep', require('./build/gulp-tasks/wiredep'));

gulp.task('build', ['jshint', 'html', 'images', 'fonts', 'extras'], require('./build/gulp-tasks/build'));

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
