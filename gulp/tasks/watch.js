/**
 * gulp watch
 */

var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var bSync  = require('browser-sync');
var reload = bSync.reload;

/*
 * paths
 */
var paths = {
  server : './',
	dist : {
    img : 'dist/images/**/*',
    css : 'dist/css/*.css',
    js  : 'dist/js/*.js'
  },
  src: {
    scss : 'src/sass/**/*.scss',
    js   : 'src/js/**/*.js'
  }
};

/**
 * watch task
 */

gulp.task('watch', function() {

  // watch sass
  gulp.watch(paths.src.scss, ['sass']);

  // watch js
  gulp.watch(paths.src.js, ['js']);

  // browser sync init
  bSync({
    notify: false,
    open: "external",
    logPrefix: 'GBoilerplate',
    server: [paths.server]
  });

  // reload all browsers
  gulp.watch(paths.dist.css).on('change', reload);
  gulp.watch(paths.dist.img).on('change', reload);
  gulp.watch(paths.dist.js).on('change', reload);

});
