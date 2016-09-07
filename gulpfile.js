const gulp = require('gulp');
const browserify = require('browserify');
const watchify = require('watchify');
const source = require('vinyl-source-stream');
const notify = require('gulp-notify');
const sass = require('gulp-sass');

function handleErrors() {
  notify.onError({
    title : 'Compile Error',
    message : '<%= error.message %>'
  }).apply(this, arguments);
  this.emit('end'); //keeps gulp from hanging on this task
}

gulp.task('sass', () => {
  return gulp.src('./client/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./client/build/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./client/*.sass', ['sass']);
});

gulp.task('build-client', () => {
  const bundler = watchify(browserify({
    entries : ['./client/app.jsx'],
    debug : true,
    transform : [
      ['babelify', {presets : ['es2015', 'react']}]
    ]
  }));

  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./client/build/'));
  }

  bundler.on('update', () => {
    var updateStart = Date.now();
    rebundle();
    console.log('Updated build!', (Date.now() - updateStart) + 'ms');
  });

  return rebundle();
});

gulp.task('default', ['build-client', 'sass', 'sass:watch']);
