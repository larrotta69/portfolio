var gulp = require('gulp'),
	rename  = require('gulp-rename'),
	browserify  = require('gulp-browserify');

gulp.task('default', function(){
	return gulp.src('./base/js/main.js')
		.pipe(browserify({}))
		.pipe(rename('desktop.js'))
		.pipe(gulp.dest('./app/js'))

});