'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

module.exports = function () {
  return gulp.src('app/scripts/*.jsx')
    .pipe($.sourcemaps.init())
      .pipe($.react())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe(reload({stream: true}));
};
