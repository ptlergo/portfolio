const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const imageMin = require('gulp-imagemin');

// Sass files variables
const sassSource = 'client/stylesheets/sass/**/*.scss';
const sassDest = './client/stylesheets/css';
const images = ['client/img/*'];

// Polyfill for Object.fromEntries to fix engine.io crash on Node v12
if (!Object.fromEntries) {
  Object.fromEntries = function (entries) {
    if (!entries || !entries[Symbol.iterator]) {
      throw new TypeError('Object.fromEntries() requires an iterable object');
    }
    const obj = {};
    for (const [key, value] of entries) {
      obj[key] = value;
    }
    return obj;
  };
}

// Static Server run using browsersync
gulp.task('run', () => {
  browserSync.init({
    server: {
      baseDir: './client',
    },
    files: './client',
  });
});

// Sass compile once then reload browser
gulp.task('sass', () => {
  return gulp
    .src(sassSource)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(sassDest))
    .pipe(browserSync.reload({ stream: true }));
});

// Default task that watches Sass, html, and reloads browsersync for changes
// gulp.task('default', ['run'], () => {
//   gulp.watch(sassSource, ['sass']);
//   gulp.watch('./client/*.html').on('change', browserSync.reload);
//   gulp.src(images)
//     .pipe(imageMin())
//     .pipe(gulp.dest('client/img'));
// });
gulp.task('default', gulp.series('run', () => {
  gulp.watch(sassSource, gulp.series('sass'));
  gulp.watch('./client/*.html').on('change', browserSync.reload);
  
  // Note: Added a 'return' here so Gulp knows exactly when this function finishes
  return gulp.src(images)
    .pipe(imageMin())
    .pipe(gulp.dest('client/img'));
}));
