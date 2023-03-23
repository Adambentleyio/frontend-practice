const gulp = require ('gulp');
const postcss = require ('gulp-postcss');
const autoprefixer = require ('autoprefixer');
const sourcemaps = require ('gulp-sourcemaps');
const cssImport = require('postcss-import');
const nested = require('postcss-nested');
const tailwind = require('tailwindcss');
const browserSync = require('browser-sync').create();



exports.default = defaultTask;
exports.watch = watch;
exports.css = css;


function defaultTask(cb) {
  console.log(`All good here boss`);
  css(),
  watch(),
  cb();
}


function css () {
  return gulp.src('app/**/*.css')
  .pipe(sourcemaps.init())
  .pipe( postcss([ cssImport, nested, autoprefixer, tailwind ]) )
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('dist/css'))
  .pipe(browserSync.stream());
}

function watch () {
  browserSync.init({
    server: {
      baseDir: './',
      directory: true,
    }
  });
  gulp.watch('./app/**/*.css', css);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
  gulp.watch('./app/**/*.js').on('change', browserSync.reload);
}

