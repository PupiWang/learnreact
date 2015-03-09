'use strict';
var gulp = require('gulp');

module.exports = function () {
  return gulp.src([
      'app/*.*',
      '!app/*.html'
    ], {
      dot: true
    }).pipe(gulp.dest('dist'));
}
