const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Sass files variables
const sassSource = 'client/stylesheets/sass/**/*.scss';
const sassDest = './client/stylesheets/css';

// Static Server + watch sass changes
gulp.task('run', ['sass'], () => {
  browserSync.init({
    server: {
      baseDir: './client',
    },
  });

  gulp.watch(sassSource, ['sass']);
  gulp.watch('./*.html').on('change', browserSync.reload({ stream: true }));
});

// Sass compile once
gulp.task('sass', () => {
  return gulp.src(sassSource)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(sassDest));
});

// Watch Sass for changes
gulp.task('watch', () => {
  gulp.watch(sassSource, ['sass']);
});
