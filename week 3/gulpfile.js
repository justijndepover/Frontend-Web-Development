var gulp = require("gulp"),
    util = require("gulp-util"),
    sass = require("gulp-sass"),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    log = util.log;

gulp.task("sass", function(){
    log("Generate CSS files " + (new Date()).toString());
    gulp.src("./dist/sass/*.scss")
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
        .pipe(gulp.dest("./app/dist/css"))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./app/dist/css'));
});