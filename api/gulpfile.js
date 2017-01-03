var gulp    = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function() {
});

gulp.task('nodemon', function() {
  nodemon({
    script: 'server.js'
  });
});
