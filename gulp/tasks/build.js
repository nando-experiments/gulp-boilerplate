/**
 * gulp default
 */

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (cb) {
  runSequence('html', ['sass', 'js', 'images', 'fonts'], cb);
});
