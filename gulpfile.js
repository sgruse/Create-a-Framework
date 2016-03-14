'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var eslint = require('gulp-eslint');

var lintPath = (__dirname + '/test/*.js', __dirname + '/router/*.js');

gulp.task('eslint', function() {
  return gulp.src(lintPath)
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('mocha', () => {
  gulp.src(__dirname + '/test/*.js')
  .pipe(mocha());
});

gulp.task('default', ['eslint', 'mocha']);
