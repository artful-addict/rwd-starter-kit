'use strict';

var			gulp = require('gulp'),
			concat = require('gulp-concat'),
			uglify = require('gulp-uglify'),
			rename = require('gulp-rename'),
			  sass = require('gulp-sass');

gulp.task("concatScripts", function() {
	gulp.src([
		'node_modules/jquery/dist/jquery.js',
		'node_modules/bootstrap/dist/js/bootstrap.js',
		'js/main.js'])
	.pipe(concat('app.js'))
	.pipe(gulp.dest("app/js"))
});

gulp.task("minifyScripts", function() {
	gulp.src("app/js/app.js") // result of the concatinated scripts file
		.pipe(uglify())
		.pipe(rename('app.min.js')) // parameter/options of renaming the minified file
		.pipe(gulp.dest('app/js'))
});

gulp.task("compileSass", function() {
	gulp.src("app/scss/manifest.scss")
		.pipe(sass())
		.pipe(rename('styles.css'))
		.pipe(gulp.dest("app/css"))
});

gulp.task("default", ["hello"], function() {
	console.log("This is the default task!");
});
