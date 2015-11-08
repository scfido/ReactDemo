/// <binding AfterBuild='jsx' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('default', function () {
    var scriptsFolder = "wwwroot/scripts";

    gulp.src('node_modules/react/dist/react.js')
        .pipe(gulp.dest(scriptsFolder));

    gulp.src('node_modules/jquery/dist/jquery.js')
        .pipe(gulp.dest(scriptsFolder));

    gulp.src('node_modules/react-dom/dist/react-dom.js')
      .pipe(gulp.dest(scriptsFolder));

    gulp.src('node_modules/showdown/dist/showdown.js')
      .pipe(gulp.dest(scriptsFolder));

});

gulp.task('jsx', function () {
    var src = 'scripts/**/*.jsx';
    // src='app/script/components/selloff/*.jsx';
    return gulp.src([src])
        .pipe(react())
        .pipe(gulp.dest('wwwroot/Scripts')); //根目录的jsx目录
        //.pipe(gulp.dest(function (file) { return file.base; }));
});