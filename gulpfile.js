'use strict';
const gulp = require('gulp');
const fs = require('fs');
const rename = require('gulp-rename');
const ejs = require('gulp-ejs');
var aigis = require('gulp-aigis');

gulp.task("ejs", function () {
    var json = JSON.parse(fs.readFileSync("src/json/data.json"));
    return gulp
        .src(["src/ejs/*.ejs", '!src/ejs/_*.ejs'])
        .pipe(ejs(json))
        .pipe(rename({ extname: ".html" }))
        .pipe(gulp.dest("dest"));
});

gulp.task('aigis', function () {
    return gulp.src('./path/to/aigis_config.yml')
        .pipe(aigis());
});