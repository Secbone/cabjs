'use strict';

let gulp = require('gulp');
let source = require("vinyl-source-stream");
let plugins = require('gulp-load-plugins')();
let babelify = require("babelify");
let browserify = require("browserify");

gulp.task('coffee', () =>{
    return gulp.src('src/**/*.coffee')
    .pipe(plugins.coffee())
    .pipe(gulp.dest('dest'));
});

gulp.task('babel', () => {
    /*return gulp.src("src/Cab.js")
        .pipe(plugins.babel({
            presets: ["es2015"]
        }))
        .pipe(plugins.browserify({
            standalone: true,
            transform:
        }))
        .pipe(gulp.dest("dest"));*/
    return browserify({
        entries: "cab.js",
    }).transform(babelify, {
        presets: ["es2015"]
    }).bundle()
    .pipe(source("Cab.js"))
    .pipe(gulp.dest("dest"));
});

gulp.task('watch', () => {
    //gulp.watch('src/**/*.coffee', ['coffee']);
    gulp.watch("src/**/*.js", ["babel"]);
});
