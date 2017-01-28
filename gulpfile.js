const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Static Server + watch sass changes
gulp.task('run', ['sass'], () => {
  browserSync.init({
    server: {
      baseDir: './client',
    },
  });

  gulp.watch('./client/stylesheets/sass/*.scss');
  gulp.watch('./client/*.html').on('change', browserSync.reload);
});

// Sass Compile Once
gulp.task('sass', () => {
  return gulp.src('client/stylesheets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./client/stylesheets/css'));
});
