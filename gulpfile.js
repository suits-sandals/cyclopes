var gulp = require('gulp'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  rename = require('gulp-rename'),
  webpack = require('webpack'),
  webpackStream = require('webpack-stream'),
  livereload = require('gulp-livereload');

/* CSS Build Steps */

gulp.task('build-css', function() {
  var plugins = [
    autoprefixer({ browsers: 'last 3 versions' }),
    cssnano()
  ];

  return gulp
    .src('src/scss/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }))
    .on('error', sass.logError)
    .pipe(postcss(plugins))
    .pipe(gulp.dest('compiled'))
    .pipe(livereload({ start: true }));
});



/* React Build */

gulp.task('build-js', function(callback) {
  return gulp
    .src('src/js/index.js')
    .pipe(webpackStream(require('./webpack.config.js'), webpack))
    .pipe(gulp.dest('compiled'))
    .pipe(livereload({ start: true }));
});


/* HTML */

gulp.task('move-base', function(callback) {
  return gulp
    .src('src/*.*')
    .pipe(gulp.dest('compiled'))
    .pipe(livereload({ start: true }));
});


/* Build Full */

gulp.task('build-full', ['build-css', 'build-js', 'move-base']);



/* Watching */

gulp.task('watch', function() {
  gulp.watch('src/js/*.*', ['build-js']);
  gulp.watch('src/js/**/*.*', ['build-js']);

  gulp.watch('src/scss/*.scss', ['build-css']);
  gulp.watch('src/scss/**/*.scss', ['build-css']);

  gulp.watch('src/*.*', ['move-base']);
});

/* Default Task */

gulp.task('default', ['watch'], function(callback) {
  return gulp.src('*').pipe(livereload({ start: true }));
});
