/**
 * gulp watch
 */

var config = require('../config.json');
var bSync  = require('browser-sync');
var gulp   = require('gulp');
var $      = require('gulp-load-plugins')();

gulp.task('serve', function () {
  // watch jade files
  gulp.watch(config.jade + '**/*.jade', ['html']);

  // watch sass files
  gulp.watch(config.sass + '**/*.scss', ['sass']);

  // watch js files
  gulp.watch(config.js + '**/*.js', ['lint', 'js']);

  bSync.init({
    notify: false,
    open: "external",
    logPrefix: 'browser-sync',
    server: config.dest.dist
  });

  gulp.watch(config.dest.dist + '**/*.{html,css,js}').on('change', bSync.reload);
});