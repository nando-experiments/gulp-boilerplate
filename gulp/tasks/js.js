/**
 * gulp js
 */

var config = require('../config.json');
var gulp   = require('gulp');
var $      = require('gulp-load-plugins')();

gulp.task('lint', function() {
  return gulp.src([
    config.js + 'components/*.js'
  ])
  .pipe($.jshint.extract('auto|always|never'))
  .pipe($.jshint())
  .pipe($.jshint.reporter('default', { verbose: true }));
})

.task('js', function() {
  gulp.src([config.js + '*.js'])
    .pipe($.plumber())
    .pipe($.include()).on('error', console.log)
    .pipe(gulp.dest(config.dest.js))
    .pipe($.uglify())
    .pipe($.rename({ suffix  : '.min' }))
    .pipe($.size({ title: 'Scripts', gzip: false, showFiles: true }))
    .pipe(gulp.dest(config.dest.js))
    .pipe($.plumber.stop());
});
