let gulp = require('gulp');
let rename = require('gulp-rename');
let styleSASS = require('gulp-sass')(require('sass'));
let uglify = require('gulp-uglify');
let pipeline = require('readable-stream').pipeline;

function html() {
  return gulp.src('./src/*.html')
  .pipe(gulp.dest('./dist'));
}

function sass() {
  return gulp.src('./src/sass/*.scss')
  .pipe(styleSASS({
    errorLogToConsole: true,
    outputStyle: "compressed",
  }))
  .on('error', console.error.bind(console))
  .pipe(rename({
    suffix: '.min',
  }))
  .pipe(gulp.dest('./dist/css'))
  .gulp.src('./src/sass/*.scss')
  .pipe(styleSASS({
    errorLogToConsole: true,
  }))
  .on('error', console.error.bind(console))
  .pipe(gulp.dest('./dist/css'));
}

function jsMin() {
  return pipeline(
    gulp.src('src/js/script.js'),
    uglify(),
    rename({suffix: '.min'}),
    gulp.dest('dist/js')
  );
}

function js() {
  return gulp.src('./src/js/script.js')
  .pipe(gulp.dest('./dist/js/'));
}

function watchFiles() {
  gulp.watch('./src/*.html', html);
  gulp.watch('./src/sass/*.scss', sass);
  gulp.watch('./src/js/script.js', gulp.series(js, jsMin));
}

gulp.task('default', watchFiles);