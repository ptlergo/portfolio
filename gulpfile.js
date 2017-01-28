const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

const sassSource = 'client/stylesheets/sass/**/*.scss';
// Static Server + watch sass changes
gulp.task('run', ['sass'], () => {
  browserSync.init({
    server: {
      baseDir: 'client',
    },
  });

  gulp.watch(sassSource, ['sass']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

// Sass Compile Once
gulp.task('sass', () => {
  return gulp.src(sassSource)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./client/stylesheets/css'));
});

// Sass watch
gulp.task('watch', () => {
  gulp.watch(sassSource, ['sass']);
});
