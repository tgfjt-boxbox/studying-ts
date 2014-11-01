var gulp = require('gulp');

var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');
var eventStream = require('event-stream');


gulp.task('scripts', function() {
	var tsResult = gulp
		.src('src/*.ts')
		.pipe(ts({
				declarationFiles: true,
				noExternalResolve: true
		}));

	return eventStream.merge(
		tsResult.dts.pipe(gulp.dest('build/definitions')),
		tsResult.js.pipe(gulp.dest('build/js'))
	);
});

gulp.task('lint', function() {
	gulp
		.src('src/*.ts')
		.pipe(tslint())
		.pipe(tslint.report('prose'));
});
