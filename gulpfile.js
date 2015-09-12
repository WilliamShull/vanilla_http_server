'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

var files = ['./*.js', 'test/*test.js'];

gulp.task('test', function() {
  gulp.src(files)
  .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('jshint', function() {
  gulp.src(files)
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('default', ['test', 'jshint']);
