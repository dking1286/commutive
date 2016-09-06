const gulp = require('gulp');
const browserify = require('browserify');
const watchify = require('watchify');
const source = require('vinyl-source-stream');
const notify = require('gulp-notify');

function handleErrors() {
  notify.onError({
    title : 'Compile Error',
    message : '<%= error.message %>'
  }).apply(this, arguments);
  this.emit('end'); //keeps gulp from hanging on this task
}

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
    console.log('Updated!', (Date.now() - updateStart) + 'ms');
  });

  return rebundle();
});

gulp.task('default', ['build-client']);
