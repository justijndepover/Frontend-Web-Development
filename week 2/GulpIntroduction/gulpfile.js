var gulp = require('gulp'),
    csslint = require("gulp-csslint"),
    cssMinifier = require("gulp-minify-css"),
    sourcemaps = require("gulp-sourcemaps"),
    jshint = require("gulp-jshint"),
    jsstylish = require("jshint-stylish"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    notify = require("gulp-notify");

gulp.task("watch", function(){
    var cssWatcher = gulp.watch('./app/styles/**/*.css', ['css-build']);
    cssWatcher.on('change', function(event){
        console.log("File: " + event.path + " was " + event.type);
    });

    var jsWatcher = gulp.watch('./app/scripts/**/*.js', ['js-build']);
    cssWatcher.on('change', function(event){
        console.log("File: " + event.path + " was " + event.type);
    });
});

gulp.task("css-build", function(){

    gulp.src("./app/styles/*.css")
        .pipe(csslint({
            'ids':false
        }))
        .pipe(csslint.reporter("junit-xml"))
        .pipe(csslint.reporter("fail"))
        .pipe(sourcemaps.init())
        .pipe(cssMinifier())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./app/dist/css"));

});

gulp.task("copy-externals", function(){

    gulp.src("./bower_components/modernizr/modernizr.js")
        .pipe(gulp.dest("./app/dist/js"));

    gulp.src("./bower_components/bootstrap/dist")
        .pipe(gulp.dest("./app/dist/bootstrap"));

});


gulp.task("js-build", function(){
    gulp.src("./app/scripts/**/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter(jsstylish))
        .pipe(sourcemaps.init())
        .pipe(concat("app.min.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./app/dist/js"))
        .pipe(notify({message: 'js built'}));
});
