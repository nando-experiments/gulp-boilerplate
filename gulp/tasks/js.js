/**
 * gulp js
 */

var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

gulp.task('js', function() {
  gulp.src([
    // add all js files
    'src/js/main.js'
  ])
    .pipe($.plumber())
    .pipe($.concat( 'main.js' ))
    .pipe(gulp.dest( 'dist/js' ))
    .pipe($.uglify())
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.size({ title: 'Scripts', gzip: false, showFiles: true }))
    .pipe(gulp.dest( 'dist/js' ))
    .pipe($.plumber.stop());
});
