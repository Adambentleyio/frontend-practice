


exports.default = defaultTask

files = {
  scss : "app/scss/**/*.css",
}

function defaultTask(cb) {
  console.log(`All good here boss`);
  scssTask
  cb();
}

function scssTask(cb) {
  return src(files.scss)
  .pipe(sourcemaps.init())
  .pipe(sass)
  .pipe([postCss([autoprefixer()])])
  .pipi(sourcemaps.write('.'))
  .pipe(gulp.dest('/dist'))
}



