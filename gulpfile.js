var gulp = require('gulp'),
  umd = require('gulp-umd'),
  rename = require("gulp-rename")

gulp
  .task('umd', function() {
    return gulp.src('src/dateAdder.js')
      .pipe(umd({
        exports: function(file) {
          return 'dateAdder'
        },
        namespace: function(file) {
          return 'dateAdder'
        }
      }))
      .pipe(rename('index.js'))
      .pipe(gulp.dest('.'))
  })
  .task('default', ['umd'])
