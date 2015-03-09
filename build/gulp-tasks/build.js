'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

module.exports = function () {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
}
