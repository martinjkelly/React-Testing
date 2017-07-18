const gulp = require('gulp');
const fs = require("fs");
const browserify = require("browserify");

gulp.task('watch', function() {

});

gulp.task('browserify', function() {
    browserify("./src/App.js")
        .transform("babelify", {
            presets: [
                "es2015",
                "react"
            ],
            global: true
        })
        .bundle()
        .pipe(fs.createWriteStream("./dist/app.js"));
});

gulp.task('default', ['browserify']);
