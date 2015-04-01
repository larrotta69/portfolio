var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minifycss = require('gulp-minify-css'),
	rename  = require('gulp-rename'),
	concat  = require('gulp-concat'),
	webserver = require('gulp-webserver'),
	browserify  = require('gulp-browserify'),
	reactify  = require('reactify'),
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

gulp.task('template', function(){
	return gulp.src('./base/js/main.jsx')
	.pipe(browserify({
      transform: [reactify]
    }))
    .pipe(rename('main.js'))
    .pipe(gulp.dest('./app/js/'));
    ;
});

gulp.task('todo', function(){
  	gulp.watch('./base/js/*.jsx', ['template']),
  	gulp.watch('./base/js/*.js', ['template']),
  	gulp.watch('./base/sass/components/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'template']);
		
