const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Sass files variables
const sassSource = 'client/stylesheets/sass/**/*.scss';
const sassDest = './client/stylesheets/css';

// Static Server run using browsersync
gulp.task('run', () => {
  browserSync.init({
    server: {
      baseDir: './client',
    },
  });
});

// Sass compile once then reload browser
gulp.task('sass', () => {
  return gulp.src(sassSource)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(sassDest))
    .pipe(browserSync.reload({ stream: true }));
});

// Watch Sass and browsersync for changes
gulp.task('watch', ['run'], () => {
  gulp.watch(sassSource, ['sass']);
  gulp.watch('./client/*.html').on('change', browserSync.reload);
});
