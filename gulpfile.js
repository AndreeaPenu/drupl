const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');


gulp.task('default', ['imageMin', 'minify', 'sass']);

gulp.task('imageMin', () =>
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);

gulp.task('minify', function() {
    gulp.src('src/js/*')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
})

gulp.task('sass', function() {
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
})

gulp.task('watch', function() {
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('src/js/*.js', ['minify']);
    gulp.watch('src/sass/*.scss', ['sass']);
});