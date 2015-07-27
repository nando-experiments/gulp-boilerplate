/**
 * gulp images
 */

var gulp  = require('gulp');
var quant = require('imagemin-pngquant');
var $     = require('gulp-load-plugins')();

gulp.task('images', function () {
  return gulp.src('src/images/**/*')
    .pipe($.imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [ quant({ quality: '80', speed: 4 }) ]
    }))
    .pipe(gulp.dest( 'dist/images' ))
    .pipe($.size({ title: 'Images', gzip: false, showFiles: true }))
    .pipe(gulp.dest('dist/images'));
});
