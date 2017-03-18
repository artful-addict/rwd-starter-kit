'use strict';

var			gulp = require('gulp'),
			concat = require('gulp-concat'),
			uglify = require('gulp-uglify'),
			rename = require('gulp-rename'),
			  sass = require('gulp-sass'),
				maps = require('gulp-sourcemaps');

gulp.task("concatScripts", function() {
	return gulp.src([
					'node_modules/jquery/dist/jquery.js',
					'node_modules/bootstrap/dist/js/bootstrap.js',
					'js/main.js'])
		.pipe(maps.init())
		.pipe(concat('app.js'))
		.pipe(maps.write('./'))
		.pipe(gulp.dest("app/js"))
});

gulp.task("minifyScripts", ['concatScripts'], function() {
	return gulp.src("app/js/app.js") // result of the concatinated scripts file
		.pipe(uglify())
		.pipe(rename('app.min.js')) // parameter/options of renaming the minified file
		.pipe(gulp.dest('app/js'))
});

gulp.task("compileSass", function() {
	return gulp.src("app/scss/manifest.scss")
		.pipe(maps.init()) // piped to our sass method where the sass is actually compiled
		.pipe(sass())
		.pipe(rename('styles.css'))
		.pipe(maps.write('./')) // places the sourcemap in the same directory as wehre the sass will be compiled to
		.pipe(gulp.dest("app/css"))
});

gulp.task("build", ['minifyScripts', 'compileSass']);

gulp.task("default", ['build']);
