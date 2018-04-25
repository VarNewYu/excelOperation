var gulp = require('gulp');
var uglify = require('gulp-uglify');


gulp.task('script',function(){
	gulp.src('app.js')
	.pipe(uglify())
	.pipe(gulp.dest('js'))
});


gulp.task('auto',function(){
	gulp.watch('app.js',['script']);
});


gulp.task('default',['script','auto']);