/**
 * gulp watch
 */

var config = require('../config.json');
var gulp   = require('gulp');
var $      = require('gulp-load-plugins')();
var jade   = require('jade');

gulp.task('html', function() {
  gulp.src(config.jade + '*.jade')
    .pipe($.jade({
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest(config.dest.dist))
});