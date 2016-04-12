var gulp = require('gulp')
var sass = require('gulp-sass')
var concat = require('gulp-concat')

gulp.task('build', function () {
  return gulp
    .src([
      './stylesheets/private/**/*.scss',
      '!./stylesheets/private/_all.scss',
      './stylesheets/public/**/*.scss',
      '!./stylesheets/public/_all.scss',
    ])
    .pipe(concat('_SassyCast.scss'))
    .pipe(gulp.dest('dist'));
});
