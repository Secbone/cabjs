'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('coffee',function(){
    return gulp.src('src/**/*.coffee')
    .pipe(plugins.coffee())
    .pipe(gulp.dest('dest'));
});

gulp.task('watch', function(){
    return gulp.watch('src/**/*.coffee', ['coffee']);
});

gulp.task('default', function(){});
