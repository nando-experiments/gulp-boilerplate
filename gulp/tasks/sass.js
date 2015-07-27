/**
 * gulp sass
 */

var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

gulp.task('sass', function() {
  return $.rubySass('src/sass/main.scss', {
      'compass'   : true,
      'noCache'   : true,
      'style'     : 'expanded', // nested - expanded - compact - compressed
      'precision' : 10
    }).on('error', function (err) {
      console.error('SASS Error!', err.message);
    })
    .pipe($.plumber())
    .pipe(gulp.dest('dist/css'))
    .pipe($.minifyCss())
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.size({ title: 'Styles', gzip: false, showFiles: true }))
    .pipe(gulp.dest('dist/css'))
    .pipe($.plumber.stop());
});
