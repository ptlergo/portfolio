const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Static Server
gulp.task('run', () => {
  browserSync.init({
    server: {
      baseDir: './client',
    },
  });
});
