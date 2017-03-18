'use strict';

var			gulp = require('gulp'),
			concat = require('gulp-concat'),
			uglify = require('gulp-uglify'),
			rename = require('gulp-rename'),
			  sass = require('gulp-sass'),
				maps = require('gulp-sourcemaps'),
				 del = require('del');

gulp.task("concatScripts", function() {
	return gulp.src([
					'node_modules/jquery/dist/jquery.js',
					'node_modules/bootstrap/dist/js/bootstrap.js',
					'js/main.js'])
		.pipe(maps.init())
		.pipe(concat('app.js'))
		.pipe(maps.write('./'))
		.pipe(gulp.dest("js"))
});

gulp.task("minifyScripts", ['concatScripts'], function() {
	return gulp.src("js/app.js") // result of the concatinated scripts file
		.pipe(uglify())
		.pipe(rename('app.min.js')) // parameter/options of renaming the minified file
		.pipe(gulp.dest('js'))
});

gulp.task("compileSass", function() {
	return gulp.src("scss/manifest.scss")
		.pipe(maps.init()) // piped to our sass method where the sass is actually compiled
		.pipe(sass())
		.pipe(rename('styles.css'))
		.pipe(maps.write('./')) // places the sourcemap in the same directory as wehre the sass will be compiled to
		.pipe(gulp.dest("css"))
});

/**
 * The first task block only watches the Sass files and then only runs compile-
 * Sass task. The second task block only watches main.js and only runs the con-
 * catScripts mthod
**/
gulp.task("watchFiles", function() {
	gulp.watch('scss/**/*.scss', ['compileSass']);
	gulp.watch('js/main.js', ['concatScripts']);
});

gulp.task("clean", function() {
	del(['dist', 'css/styles.css*', 'js/app.*.js*']);
});

gulp.task("build", ['minifyScripts', 'compileSass'], function() {
	return gulp.src(['css/styles.css', 'js/app.min.js', 'index.html', 'img/**'], { base: './'})
		.pipe(gulp.dest('dist'))
});

gulp.task("serve", ['watchFiles']);

gulp.task("default", ['build'], function() {
	gulp.start('build');
});
