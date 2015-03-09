'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

module.exports = function () {
  return gulp.src('app/styles/main.scss')
    .pipe($.sourcemaps.init())
      .pipe($.sass({
       outputStyle: 'nested', // libsass doesn't support expanded yet
       precision: 10,
       includePaths: ['.'],
       onError: console.error.bind(console, 'Sass error:')
      }))
      .pipe($.postcss([
       require('autoprefixer-core')({browsers: ['last 1 version']})
      ]))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream: true}));
};
