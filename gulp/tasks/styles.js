var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
  	.pipe(sourcemaps.init())
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(concat('styles.css'))
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/temp/styles'));
});