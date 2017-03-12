var gulp         = require("gulp"),
		browserSync  = require("browser-sync"),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer');
var SASS={
		"SRC":'app/scss/**/*.scss',
		"DEST":'app/css'
		};
gulp.task('server', function(){
	browserSync({
		port: 9000,
		server: {
			baseDir: 'app'
		}
	});
});

gulp.task('watch',function(){
	gulp.watch([
		'app/*.html',
		'app/js/**/*.js',
		'app/css/**/*.css',
		'app/scss/**/*.scss'
	],['sass']).on('change',browserSync.reload);
});
gulp.task('sass', function () {
  return gulp.src(SASS.SRC)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['> 5%'],
            cascade: false
        }))
    .pipe(gulp.dest(SASS.DEST));
});

gulp.task('default', ['server','watch']);
