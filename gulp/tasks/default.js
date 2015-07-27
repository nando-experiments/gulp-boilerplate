/**
 * gulp default
 */

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', ['watch'], function (cb) {
  runSequence('watch', ['sass', 'js', 'images', 'fonts'], cb);
});
