const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Static Server
gulp.task('run', () => {
  browserSync.init({
    server: {
      baseDir: './client',
    },
  });
});

// Sass Compile Once
gulp.task('sass', () => {
  return gulp.src('')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});
