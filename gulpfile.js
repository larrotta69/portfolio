var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minifycss = require('gulp-minify-css'),
	rename  = require('gulp-rename'),
	concat  = require('gulp-concat'),
	webserver = require('gulp-webserver'),
	browserify  = require('gulp-browserify'),
	gulpif  = require('gulp-if');

var env = 'development';
var sassDir = './base/sass/*.scss';
var sassOut = './app/css';

gulp.task('styles', function () {
	var config = {};
	var browser = { browsers: ['> 1%', 'IE 7'] };

	if (env === 'development'){
	  config.sourceComments = 'map';
	}

	return gulp.src(sassDir)
		.pipe( sass( config ) )
		.pipe( gulpif(env != 'development', minifycss())  )
		.pipe( gulp.dest(sassOut) );
});

gulp.task('webserver', function() {
	gulp.src('porfolio')
	.pipe(webserver({
		directoryListing: true,
		open: true,
		fallback: 'index.html'
	}));
});

gulp.task('default', ['styles']);
		
