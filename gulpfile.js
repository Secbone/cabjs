'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('coffee', () =>{
    return gulp.src('src/**/*.coffee')
    .pipe(plugins.coffee())
    .pipe(gulp.dest('dest'));
});

gulp.task('babel', () => {
    return gulp.src("src/**/*.js")
        .pipe(plugins.babel({
            presets: ["es2015"]
        }))
        .pipe(gulp.dest("dest"));
});

gulp.task('watch', () => {
    //gulp.watch('src/**/*.coffee', ['coffee']);
    gulp.watch("src/**/*.js", ["babel"]);
});
