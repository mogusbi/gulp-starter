'use strict';

var gulp = require('gulp');
var sasslint = require('gulp-sass-lint');
var fs = require('fs');
var mkdirp = require('mkdirp');
var paths = require('../../config/paths');
var config = {
  sasslint: require('../../config/sasslint')
};

function task () {
  return gulp
    .src(paths.src.sass)
    .pipe(sasslint(config.sasslint))
    .pipe(sasslint.format());
}

gulp.task('styles:lint', task);

module.exports = task;
