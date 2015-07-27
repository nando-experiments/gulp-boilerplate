/**
 * gulp fonts
 */

var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

gulp.task('fonts', function () {
  return gulp.src(['_src/fonts/**'])
    .pipe(gulp.dest('dist/fonts'))
    .pipe($.size({title: 'fonts', gzip: false, showFiles: true}));
})
