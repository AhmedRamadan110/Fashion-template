const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const livereload = require('gulp-livereload');

gulp.task('html', function() {
    return gulp.src('index.pug')
            .pipe(pug({pretty:true}))
            .pipe(gulp.dest('dist'))
            .pipe(livereload())
})

gulp.task('css', function() {
    return gulp.src('css/**/*.scss')
            .pipe(sass({outputStyle: 'nested'}))
            .pipe(autoprefixer())
            .pipe(gulp.dest('dist/css'))
            .pipe(livereload())
})

gulp.task('js', function() {
    return gulp.src('js/$.js')
            .pipe(gulp.dest('dist/js'))
            .pipe(livereload())
})

gulp.task('watch', function() {
    require('./server.js')
    livereload.listen()
    gulp.watch('index.pug', gulp.series('html'))
    gulp.watch('css/**/*.scss', gulp.series('css'))
    gulp.watch('js/*.js', gulp.series('js'))
})