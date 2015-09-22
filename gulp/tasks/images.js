/**
 * gulp images
 */

var gulp   = require('gulp');
var config = require('../config.json');
var quant  = require('imagemin-pngquant');
var $      = require('gulp-load-plugins')();

gulp.task('images', function () {
  return gulp.src(config.img + '**/*')
    .pipe($.imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [ quant({ quality: '65-80', speed: 4 }) ]
    }))
    .pipe(gulp.dest(config.dest.img))
    .pipe($.size({ title: 'Images', gzip: false, showFiles: true }))
    .pipe(gulp.dest(config.dest.img));
});
