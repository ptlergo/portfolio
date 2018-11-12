const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const imageMin = require('gulp-imagemin');

// Sass files variables
const sassSource = 'client/stylesheets/sass/**/*.scss';
const sassDest = './client/stylesheets/css';
const images = ['client/img/*'];
// Static Server run using browsersync
gulp.task('run', () => {
  browserSync.init({
    server: {
      baseDir: './client',
    },
    watch: true,
    files: './client',
  });
});
// Sass compile once then reload browser
gulp.task('sass', () =>
  gulp
    .src(sassSource)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(sassDest))
    .pipe(browserSync.reload({ stream: true })),
);

// Default task that watches Sass, html, and reloads browsersync for changes
gulp.task('default', ['run'], () => {
  gulp.watch(sassSource, ['sass']);
  gulp.watch('./client/*.html').on('change', browserSync.reload);
  gulp
    .src(images)
    .pipe(imageMin())
    .pipe(gulp.dest('client/img'));
});
