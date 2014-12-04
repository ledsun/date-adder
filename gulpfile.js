var gulp = require('gulp'),
  umd = require('gulp-umd'),
  path = require('path'),
  toFilename = function(file) {
    return path.basename(file.path, path.extname(file.path))
  },
  umdOption = {
    exports: toFilename,
    namespace: toFilename
  },
  rename = require("gulp-rename")

gulp
  .task('umd', function() {
    return gulp.src('src/dateAdder.js')
      .pipe(umd(umdOption))
      .pipe(rename('index.js'))
      .pipe(gulp.dest('.'))
  })
  .task('default', ['umd'])
