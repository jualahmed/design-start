var gulp = require('gulp'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		},
		port: 8080
	});

	gulp.watch('./app/index.html', function() {
		browserSync.reload();
	});

	gulp.watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	});

	gulp.watch('./app/assets/scriptss/**/*.js', function() {
		gulp.start('scriptsRefresh');
	})

});


gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});