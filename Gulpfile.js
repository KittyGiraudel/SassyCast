var gulp = require('gulp')
var sass = require('gulp-sass')
var concat = require('gulp-concat')

gulp.task('build', function () {
  return gulp
    .src([
      './stylesheets/options.scss',
      './stylesheets/**/*.scss'
    ])
    .pipe(concat('_SassyCast.scss'))
    .pipe(gulp.dest('./dist'))
})
